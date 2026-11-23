import { Connection, Journey } from "@/lib/domain/types";
export function searchJourneys(connections:Connection[],origin:string,destination:string,earliest:number,maxTransfers=2):Journey[]{
 const sorted=connections.filter(c=>c.departure>=earliest).sort((a,b)=>a.departure-b.departure);
 const labels=new Map<string,{arrival:number;legs:Connection[]}>(); labels.set(origin,{arrival:earliest,legs:[]});
 for(const c of sorted){ const from=labels.get(c.fromStationId); if(!from||from.arrival>c.departure||from.legs.length>maxTransfers) continue; const existing=labels.get(c.toStationId); if(!existing||c.arrival<existing.arrival) labels.set(c.toStationId,{arrival:c.arrival,legs:[...from.legs,c]}); }
 const hit=labels.get(destination); if(!hit||!hit.legs.length) return [];
 const first=hit.legs[0]; return [{id:hit.legs.map(x=>x.tripId).join("_"),departure:first.departure,arrival:hit.arrival,durationMinutes:Math.round((hit.arrival-first.departure)/60000),transfers:hit.legs.length-1,legs:hit.legs,provenance:hit.legs.map(x=>x.provenance)}];
}
