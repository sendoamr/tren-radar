import {NextResponse} from 'next/server';
export const dynamic='force-dynamic';
const URL='https://gtfsrt.renfe.com/trip_updates_LD.json';
const text=x=>x==null?'':String(x);
function entities(raw){return raw.entity||raw.entities||raw.data||[]}
function normalize(e){
 const u=e.tripUpdate||e.trip_update||e;
 const trip=u.trip||{}; const stops=u.stopTimeUpdate||u.stop_time_update||[];
 const last=stops.at(-1)||{}, first=stops[0]||{};
 const delay=last.arrival?.delay??last.departure?.delay??first.departure?.delay??0;
 const start=first.departure?.time||first.arrival?.time||trip.startTime||trip.start_time;
 const end=last.arrival?.time||last.departure?.time;
 return {id:text(trip.tripId||trip.trip_id||e.id),number:text(trip.routeId||trip.route_id||trip.tripId||trip.trip_id||e.id).replace(/[^0-9A-Za-z-]/g,''),operator:'Renfe',service:'AV / LD / MD',origin:text(first.stopName||first.stop_name||first.stopId||first.stop_id||'Origen no publicado'),destination:text(last.stopName||last.stop_name||last.stopId||last.stop_id||'Destino no publicado'),departure:start,arrival:end,delay:Math.round(Number(delay||0)/60),status:trip.scheduleRelationship||trip.schedule_relationship||'SCHEDULED'};
}
export async function GET(){
 try{const r=await fetch(URL,{next:{revalidate:20},headers:{accept:'application/json'}});if(!r.ok)throw new Error('Fuente '+r.status);const raw=await r.json();const trains=entities(raw).map(normalize).filter(x=>x.id).slice(0,500);return NextResponse.json({live:true,updatedAt:new Date().toISOString(),attribution:'Datos abiertos Renfe, CC BY 4.0',trains},{headers:{'Cache-Control':'s-maxage=20, stale-while-revalidate=120'}})}
 catch(error){return NextResponse.json({live:false,updatedAt:new Date().toISOString(),message:'La fuente en tiempo real no está disponible temporalmente.',trains:[]},{status:200})}
}
