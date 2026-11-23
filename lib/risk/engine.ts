import { RiskAssessment, RiskSignal } from "@/lib/domain/types";
export function assessRisk(signals:RiskSignal[],freshnessOk:boolean):RiskAssessment {
 const assessedAt=new Date().toISOString();
 if(!freshnessOk||signals.length===0) return {level:"INSUFFICIENT_DATA",signals,assessedAt,explanation:"No existen observaciones recientes suficientes para evaluar el riesgo.",limitations:["La ausencia de datos no implica ausencia de incidencias."]};
 const score=signals.reduce((n,s)=>n+s.weight,0); const level=score>=7?"HIGH":score>=3?"MODERATE":"LOW";
 return {level,score,signals,assessedAt,explanation:`Riesgo ${level.toLowerCase()} basado en ${signals.length} señales trazables.`,limitations:["La evaluación no confirma que vaya a producirse un retraso."]};
}
