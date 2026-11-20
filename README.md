# TrenRadar v3
Portal Next.js sin persistencia propia. Integra tres operadores en una sola búsqueda.

## Fuentes
- Renfe: GTFS-RT de trip updates (realtime).
- OUIGO España: GTFS estático público publicado en el ecosistema NAP/Transitland.
- iryo: feed GTFS comunitario registrado en MobilityData. No se presenta como realtime.

## Vercel
Sube el repositorio e impórtalo. No requiere variables para funcionar.

### Google Analytics
Añade en Vercel > Settings > Environment Variables:
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX

### Sustituir feeds
Opcionalmente puedes definir OUIGO_GTFS_URL e IRYO_GTFS_URL para cambiar la fuente sin tocar código.
