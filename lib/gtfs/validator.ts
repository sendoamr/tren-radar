export const requiredFiles=["agency.txt","stops.txt","routes.txt","trips.txt","stop_times.txt"] as const;
export function validateFileNames(names:string[]){const missing=requiredFiles.filter(f=>!names.includes(f));return {valid:missing.length===0,missing};}
