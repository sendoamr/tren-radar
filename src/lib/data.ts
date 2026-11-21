export type Trip = { id:string; operator:string; mode:'Tren'|'Avión'; code:string; from:string; to:string; depart:string; arrive:string; duration:string; price:number; delay:number; status:string; stops:string; note?:string };
export const trips:Trip[] = [
 {id:'1',operator:'iryo',mode:'Tren',code:'06107',from:'Madrid · Atocha',to:'Barcelona · Sants',depart:'08:55',arrive:'11:42',duration:'2 h 47 min',price:39.90,delay:0,status:'En hora',stops:'Directo'},
 {id:'2',operator:'AVE',mode:'Tren',code:'031 save',from:'Madrid · Atocha',to:'Barcelona · Sants',depart:'09:00',arrive:'11:52',duration:'2 h 52 min',price:52.40,delay:12,status:'Retrasado',stops:'Directo',note:'Llegada estimada +12 min'},
 {id:'3',operator:'OUIGO',mode:'Tren',code:'6591',from:'Madrid · Atocha',to:'Barcelona · Sants',depart:'09: ad',arrive:'12:05',duration:'3 h 05 min',price:25.00,delay:0,status:'En hora',stops:'Directo'},
 {id:'4',operator:'Avlo',mode:'Tren',code:'06570',from:'Madrid · Atocha',to:'Barcelona · Sants',depart:'10:00',arrive:'13:05',duration:'3 h 05 min',price:19.00,delay:0,status:'En hora',stops:'Directo'},
 {id:'5',operator:'Vueling',mode:'Avión',code:'VY1004',from:'Madrid · MAD',to:'Barcelona · BCN',depart:'09:30',arrive:'10:50',duration:'1 h 20 min',price:48.00,delay:25,status:'Retrasado',stops:'Directo',note:'Salida estimada +25 min'},
 {id:'6',operator:'AVE',mode:'Tren',code:'03083',from:'Madrid · Atocha',to:'Barcelona · Sants',depart:'11:00',arrive:'13:52',duration:'2 h 52 min',price:61.50,delay:0,status:'En hora',stops:'Directo'}
];
export const incidents = [
 {level:'high',title:'Limitación temporal de velocidad',route:'Madrid ↔ Barcelona',detail:'Tramo Calatayud – Zaragoza · Posibles demoras de 10–15 min',time:'Actualizado hace 4 min',tag:'Alta velocidad'},
 {level:'medium',title:'Obras programadas',route:'Barcelona ↔ Figueres',detail:'Trabajos de mantenimiento durante la noche. Consulta servicios afectados.',time:'Actualizado hace 18 min',tag:'Infraestructura'},
 {level:'low',title:'Incidencia resuelta',route:'Valencia ↔ Madrid',detail:'Circulación recuperando progresivamente la normalidad.',time:'Actualizado hace 32 min',tag:'Resuelta'}
];
