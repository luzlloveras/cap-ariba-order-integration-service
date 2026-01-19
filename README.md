# Ariba Order Integration Service

This CAP project reads purchase orders from the Ariba API, exposes them over OData, and forwards selected orders to a GA5-compatible service. It exists to provide a focused, real-world integration slice that is easy to run and review.

## What this integration demonstrates

- CAP service modeling and handler wiring for remote services
- OData V4 exposure for UI and integration consumers
- A practical flow from Ariba purchase orders to a GA5 destination

## How to run

- `npm install`
- Set `apikey` in your environment for the Ariba sandbox
- `cds watch`
- Open `http://localhost:4004/orders_integration/webapp/index.html`
 
The GA5 service is backed by local SQLite in this repo, so no external GA5 access is required.

## Configuration

`apikey` is read from the `apikey` environment variable at runtime for Ariba API access.
Keep it out of the repo and set it in your shell or deployment environment.
GA5 runs against the local SQLite database included here, so no external GA5
credentials are required.

## Documentation

- Examples and payloads: [`docs/examples.md`](docs/examples.md)
- Folder overview: [`docs/file-structure.md`](docs/file-structure.md)
