import { Station } from "@/lib/domain/types";
const p={sourceId:"bootstrap-official-catalog",sourceName:"Catálogo inicial verificable; sustituir por GTFS importado",kind:"OFFICIAL" as const,updatedAt:"2026-11-23T12:00:00+01:00",state:"AVAILABLE" as const};
export const stations:Station[]=[
{id:"ES-MAD-ATOCHA",name:"Madrid-Puerta de Atocha-Almudena Grandes",city:"Madrid",aliases:["Madrid Atocha","Madrid Puerta de Atocha","Atocha"],latitude:40.4066,longitude:-3.6892,provenance:p},
{id:"ES-BCN-SANTS",name:"Barcelona-Sants",city:"Barcelona",aliases:["Barcelona Sants","Sants"],latitude:41.3791,longitude:2.1401,provenance:p},
{id:"ES-SEV-SJ",name:"Sevilla-Santa Justa",city:"Sevilla",aliases:["Sevilla Santa Justa","Santa Justa"],latitude:37.3922,longitude:-5.9755,provenance:p},
{id:"ES-VAL-JS",name:"Valencia-Joaquín Sorolla",city:"Valencia",aliases:["Valencia Joaquin Sorolla","Joaquin Sorolla"],latitude:39.4602,longitude:-0.3814,provenance:p},
{id:"ES-ZAZ-DELICIAS",name:"Zaragoza-Delicias",city:"Zaragoza",aliases:["Zaragoza Delicias","Delicias"],latitude:41.6586,longitude:-0.9111,provenance:p},
{id:"ES-MAL-MZ",name:"Málaga-María Zambrano",city:"Málaga",aliases:["Malaga Maria Zambrano","Malaga Zambrano"],latitude:36.7113,longitude:-4.4310,provenance:p}
];
