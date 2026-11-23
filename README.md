# VIAORA

MVP honesto de inteligencia ferroviaria para España construido con Next.js, React y TypeScript estricto. Incluye radar sin datos simulados, catálogo normalizado de estaciones, API de búsqueda, motor CSA básico, validador GTFS, motor de riesgo explicable y registro de fuentes.

## Inicio
```bash
cp .env.example .env.local
npm install
npm run dev
```
Abrir http://localhost:3000.

## Verificación
```bash
npm test
npm run typecheck
npm run build
```

## GTFS
1. Descarga legalmente un ZIP GTFS oficial desde NAP.
2. Descomprímelo fuera del repositorio.
3. Valida la estructura: `npm run import:gtfs -- /ruta/feed`.
4. Conecta el adaptador de persistencia a PostgreSQL usando `docs/DATABASE.sql`.

El script entregado valida el conjunto mínimo obligatorio y demuestra el boundary de importación. No inserta aún el feed completo: hacerlo correctamente requiere credenciales PostgreSQL y un feed real elegido por el operador.

## Despliegue Vercel
1. Importa el repositorio en Vercel.
2. Configura `DATABASE_URL` y las URLs/credenciales de conectores autorizados.
3. Ejecuta `npm run build` en CI.
4. Despliega la aplicación de consulta.
5. Ejecuta ingestiones en un worker externo o job programado; no dentro de una petición web.

## Funcionalidad verificada por tests
- Variantes de nombres de estaciones.
- Horas GTFS superiores a 24:00.
- Ruta con transbordo mediante CSA.
- El motor de riesgo no devuelve riesgo bajo sin datos.

## Limitaciones deliberadas
- No incluye horarios, trenes, incidencias, GPS, precios o estadísticas ficticias.
- La importación persistente requiere PostgreSQL y un feed oficial real.
- Renfe Data y ADIF se entregan como conectores pendientes de configuración/validación contractual.
- Mis viajes e histórico quedan como siguiente fase tras disponer de servicios reales persistidos.

Consulta `docs/ARCHITECTURE.md`, `docs/DATA_SOURCES.md` y `docs/DATABASE.sql`.
