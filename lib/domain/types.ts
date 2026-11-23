export type ProvenanceKind = "OFFICIAL" | "EXTERNAL" | "VIAORA_CALCULATED" | "ESTIMATE" | "NO_DATA";
export type DataState = "AVAILABLE" | "STALE" | "UNAVAILABLE";
export interface Provenance { sourceId:string; sourceName:string; kind:ProvenanceKind; observedAt?:string; updatedAt:string; state:DataState; }
export interface Station { id:string; name:string; city:string; aliases:string[]; latitude?:number; longitude?:number; provenance:Provenance; }
export interface Connection { tripId:string; trainNumber?:string; operator:string; fromStationId:string; toStationId:string; departure:number; arrival:number; serviceDate:string; provenance:Provenance; }
export interface JourneyLeg extends Connection {}
export interface Journey { id:string; departure:number; arrival:number; durationMinutes:number; transfers:number; legs:JourneyLeg[]; provenance:Provenance[]; }
export interface RiskSignal { code:string; label:string; weight:number; evidence:string; observedAt:string; }
export interface RiskAssessment { level:"LOW"|"MODERATE"|"HIGH"|"INSUFFICIENT_DATA"; score?:number; signals:RiskSignal[]; assessedAt:string; explanation:string; limitations:string[]; }
