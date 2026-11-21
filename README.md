# VIAORA — movilidad ferroviaria y aérea

Proyecto Next.js 14 preparado para desplegar en Vercel.

## Funcionalidad incorporada

- Autocompletado de estaciones españolas mediante el catálogo público de estaciones.
- Buscador de trenes en circulación para el día actual, con origen/destino, franja de hora programada (cuando el feed ofrece el itinerario), operador, larga/media distancia y filtro de retrasos.
- Detalle de tren, posición, velocidad, retraso publicado, antigüedad del dato e itinerario disponible.
- Seguimiento por número de tren y actualización automática cada 30 segundos mientras se visualiza el viaje.
- Guardado local de trenes en el navegador.
- Avisos y cancelaciones publicados por los feeds disponibles, con detalle expandible.
- Seguimiento experimental de aeronaves por callsign/número de vuelo mediante ADS-B, a través de una ruta server-side.
- Enlaces a canales de venta oficiales de Renfe, OUIGO e iryo y a Infovuelos Aena.

## Datos y límites que se deben mostrar al usuario

### Ferrocarril

La app utiliza la API pública de trenes de Valfiguer, que normaliza feeds de Renfe Data, FGC y MovEuskadi. Los datos abiertos de Renfe incluyen posiciones de alta velocidad/larga distancia/media distancia, horarios y datos de Cercanías, con huecos de cobertura. El feed no es un sistema de seguridad ni sustituye la información oficial del operador.

Atribución visible requerida por el proveedor: `Datos: Renfe Data, FGC y MovEuskadi (CC BY 4.0) vía trenes.valfiguer.com`.

La búsqueda en esta versión consulta trenes que publican posición en directo hoy. No equivale a un inventario completo de salidas ni permite comparar tarifas. La franja horaria filtra por salida programada únicamente cuando el itinerario del tren contiene ese dato. Si el dato no está publicado, el resultado se conserva y no se debe presentar una hora inferida.

### OUIGO e iryo

- OUIGO publica un conjunto de horarios GTFS en el Punto de Acceso Nacional (NAP), con validez temporal y actualizaciones periódicas. Esta versión enlaza a su canal de venta, pero todavía no ingiere ni consulta ese GTFS.
- No se ha integrado una fuente pública estable de horarios/tiempo real de iryo. La app no debe inventar servicios, retrasos ni precios. Se ofrece acceso al canal oficial.
- No se consulta ni se extrae información de APIs privadas/no documentadas de venta.

### Aviación

El seguimiento ADS-B usa una API comunitaria de posiciones de aeronaves. Sirve para localizar una aeronave si está siendo recibida por la red y su callsign coincide; no proporciona por sí sola horario comercial, puerta, embarque, cancelación ni retraso oficial de Aena. Para esos datos debe incorporarse un proveedor con licencia o una integración autorizada de Aena.

## Desarrollo

```bash
npm install
npm run dev
```

## Despliegue en Vercel

Importa el repositorio o sube el proyecto a GitHub y crea un proyecto nuevo en Vercel. Framework: Next.js. No requiere variables de entorno para el prototipo actual.

## Siguientes pasos recomendados para una versión de producción

1. Ingerir y versionar los GTFS del NAP y Renfe para tener horarios futuros de Renfe y OUIGO.
2. Conseguir una fuente autorizada de horarios y estado para iryo y, si es posible, acuerdos de datos con los operadores.
3. Incorporar un proveedor de precios con derecho de uso comercial; no hacer scraping de los motores de venta.
4. Integrar un proveedor aéreo/Aena con cobertura de vuelos programados, estado, cancelaciones y marcas temporales.
5. Añadir backend persistente y notificaciones push/email para que el seguimiento no dependa de mantener abierta la web.
6. Añadir caché, límites de consumo, observabilidad y atribución de licencias.
