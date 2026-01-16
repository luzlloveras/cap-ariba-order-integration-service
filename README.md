# Ariba Order Integration Service

This CAP project reads purchase orders from the Ariba API, exposes them over OData, and forwards selected orders to a GA5-compatible service. It exists to provide a focused, real-world integration slice that is easy to run and review.

## What this integration demonstrates

- CAP service modeling and handler wiring for remote services
- OData V4 exposure for UI and integration consumers
- A practical flow from Ariba purchase orders to a GA5 destination

## How to run

- `npm install`
- Export `apikey` for the Ariba sandbox (used by `srv/external/AribaAPI.js`)
  - Example: `export apikey=YOUR_ARIBA_SANDBOX_API_KEY`
- `cds watch`
- Open `http://localhost:4004/orders_integration/webapp/index.html`
 
The GA5 service is backed by local SQLite in this repo, so no external GA5 access is required.

## Documentation

- Examples and payloads: [`docs/examples.md`](docs/examples.md)
- Folder overview: [`docs/file-structure.md`](docs/file-structure.md)
