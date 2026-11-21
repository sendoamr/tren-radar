# VIAORA — Mobility intelligence for Spain

Next.js 14 + React + TypeScript. Responsive interface prototype for a multimodal travel information platform.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current scope

- Responsive dashboard, navigation and mobile sidebar.
- Multimodal journey search UI (train + flight), operator and mode filters, sorting, date selector and saved options.
- Disruption centre and flight information landing page.
- Clear demo-data warnings. No live prices, bookings, train positions or flight statuses are claimed.

## Data integration: important reality check

The interface is deliberately separated from provider integrations. Before enabling live claims, implement server-side adapters and store source timestamps, licences, coverage and confidence for each field.

Suggested phases:

1. **Renfe / Renfe Data** — evaluate the open-data portal datasets for schedules, vehicle positions and notices. Respect CC BY 4.0 attribution and each dataset's update cadence. Keep the adapter on the server and normalize GTFS / GTFS-RT / JSON into a common model.
2. **Cercanías and regional networks** — add independent adapters for FGC, Euskotren and other regional providers where open feeds and reuse terms permit. Cercanías should be an explicit product area, not mixed into long-distance metrics.
3. **OUIGO and iryo** — do not assume public real-time APIs or scrape undocumented endpoints as a production dependency. Seek a commercial/data partnership or permitted distribution feed. If unavailable, link users to operator booking/status pages and label the coverage gap.
4. **Flights** — evaluate Aena's operational information and licensed flight-data providers. Confirm API access, permitted caching/display and commercial terms before launch. Do not scrape consumer pages as a substitute for a stable feed.
5. **Prices** — use authorized inventory/affiliate APIs or partner feeds. A price calendar needs historical observations captured over time; a one-off search cannot truthfully show price trends. Show capture timestamp, fare conditions, baggage and availability caveats.
6. **Incidents** — separate official notices from inferred anomalies and editorial reports. Never label an inferred slowdown as an official Adif incident. Keep provenance and confidence visible.

## Recommended normalized entities

- `Operator`, `Station`, `Airport`, `Route`, `ScheduledTrip`, `LiveObservation`, `ServiceAlert`, `FareQuote`, `PriceObservation`, `SourceStatus`.
- Every live observation should include `source`, `observedAt`, `receivedAt`, `validUntil`, `confidence`, and `licence`.
- Use a server-side polling/cache layer (e.g. Redis or managed KV) so visitors do not multiply requests to upstream feeds. Add rate limits, stale-data handling and a provider health page.

## Deployment

Vercel compatible. Deploy as a standard Next.js project. Live connectors should be implemented as server routes/background ingestion, not direct browser calls to undocumented endpoints. Configure secrets only in Vercel environment variables.

## Branding

VIAORA is a working name. Check trademark and domain availability before public launch.
