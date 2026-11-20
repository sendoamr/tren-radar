# TrenRadar

Portal ligero de estado ferroviario para España, sin base de datos.

## Desarrollo

```bash
npm install
npm run dev
```

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, selecciona **Add New > Project** e importa el repositorio.
3. Vercel detectará Next.js. Pulsa **Deploy**.

No requiere variables de entorno. La ruta `/api/trains` consulta el JSON público de Renfe y usa caché serverless de 20 segundos.

## Cobertura

- Renfe AV/LD/MD: feed en tiempo real `trip_updates_LD.json`.
- iryo: la interfaz está preparada, pero se marca como horario cuando no hay fuente abierta verificable.
- OUIGO: existe GTFS estático público. Para incorporar todos sus servicios sin base de datos puede añadirse un job de build que descargue y convierta el ZIP a JSON.

## Principio de producto

Nunca mostrar como dato en directo algo que sólo sea un horario programado.
