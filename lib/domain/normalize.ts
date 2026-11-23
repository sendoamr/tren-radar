export function normalizeStationName(value:string):string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
}
export function stationTokens(value:string):Set<string> { return new Set(normalizeStationName(value).split(" ").filter(Boolean)); }
export function similarity(a:string,b:string):number {
 const x=stationTokens(a), y=stationTokens(b); if(!x.size||!y.size) return 0;
 const intersect=[...x].filter(t=>y.has(t)).length; return intersect/Math.max(x.size,y.size);
}
