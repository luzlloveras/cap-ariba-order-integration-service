# File structure overview

This repository follows a standard CAP layout with a UI module and integration assets.

## Top-level folders

- `app/`: UI applications and related UI5 configuration
- `db/`: CDS data model and persistence artifacts
- `srv/`: CAP services and external service adapters
- `resources/`: build artifacts used for deployment

## Notable files

- `db/data/`: seed data loaded into the local database
- `package.json`: project metadata, scripts, and CAP configuration
- `mta.yaml`: multi-target application definition
- `xs-security.json`: security configuration for XSUAA
