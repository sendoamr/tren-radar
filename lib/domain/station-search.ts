import { stations } from "@/lib/data/stations";
import { normalizeStationName, similarity } from "./normalize";
export function searchStations(query:string){
 const q=normalizeStationName(query); if(!q) return [];
 return stations.map(s=>{const values=[s.name,s.city,...s.aliases]; const exact=values.some(v=>normalizeStationName(v)===q); const contains=values.some(v=>normalizeStationName(v).includes(q)); const score=exact?1:contains?0.95:Math.max(...values.map(v=>similarity(v,q))); return {station:s,score};}).filter(x=>x.score>=.5).sort((a,b)=>b.score-a.score).slice(0,8);
}
