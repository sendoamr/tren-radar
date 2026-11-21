import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
  const callsign=(req.nextUrl.searchParams.get('callsign')||'').replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
  if(!callsign || callsign.length<3) return NextResponse.json({error:'Introduce un indicativo de vuelo válido.'},{status:400});
  const prefixes:Record<string,string>={VY:'VLG',IB:'IBE',UX:'AEA',FR:'RYR',U2:'EZY',BA:'BAW',AF:'AFR',KL:'KLM',LH:'DLH',EW:'EWG',W6:'WZZ',TP:'TAP',AZ:'ITY',LX:'SWR',OS:'AUA',SK:'SAS',DY:'NOZ',LO:'LOT',TK:'THY',QR:'QTR',EK:'UAE',EY:'ETD',AA:'AAL',DL:'DAL',UA:'UAL'};
  const candidate=/^[A-Z0-9]{2,3}\d{2,5}$/.test(callsign)&&prefixes[callsign.slice(0,2)]?prefixes[callsign.slice(0,2)]+callsign.slice(2):callsign;
  try {
    let response=await fetch(`https://api.adsb.lol/v2/callsign/${encodeURIComponent(callsign)}`,{headers:{accept:'application/json'},cache:'no-store',signal:AbortSignal.timeout(9000)});
    let data=response.ok?await response.json():{ac:[]};
    if(!(data.ac||[]).length&&candidate!==callsign){response=await fetch(`https://api.adsb.lol/v2/callsign/${encodeURIComponent(candidate)}`,{headers:{accept:'application/json'},cache:'no-store',signal:AbortSignal.timeout(9000)});data=response.ok?await response.json():{ac:[]};}
    return NextResponse.json({searched:[callsign,candidate],aircraft:(data.ac||[]).map((a:any)=>({icao24:a.hex,callsign:(a.flight||'').trim(),registration:a.r,lat:a.lat,lon:a.lon,alt_baro:a.alt_baro,gs:a.gs,track:a.track,on_ground:a.on_ground,seen:a.seen}))});
  } catch { return NextResponse.json({error:'El servicio de seguimiento aéreo no responde ahora mismo.'},{status:502}); }
}
