# Arquitectura VIAORA

Arquitectura hexagonal ligera: UI/API (Next.js), casos de uso, dominio ferroviario y adaptadores de datos. La consulta se despliega en Vercel; la ingestión GTFS/GTFS-RT se ejecuta fuera de las peticiones de usuario y persiste en PostgreSQL.

## Límites
- Vercel sirve UI y APIs de consulta.
- Un worker programado descarga, valida, versiona y persiste feeds.
- Ningún resultado en pantalla mezcla datos reales y fixtures.
- Toda observación conserva procedencia y frescura.
