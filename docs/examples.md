# Examples

This page gathers longer examples and payloads to keep the main README concise. The payloads are representative of the fields this project maps.

## OData read example

```
GET /order/Orders?$select=documentNumber,supplierName,companyCode,status,poShipToCity,poShipToCountry,poShipToState
```

## Ariba order payload (mapped fields)

```
{
  "documentNumber": "DO240",
  "supplierName": "Acme Supplies",
  "companyCode": "1000",
  "status": "Approved",
  "poShipToCity": "Miami",
  "poShipToCountry": "US",
  "poShipToState": "FL"
}
```

## GA5 post payload (mapped fields)

```
{
  "documentNumber": "DO240",
  "supplierName": "Acme Supplies",
  "companyCode": "1000",
  "status": "Approved",
  "poShipToCity": "Miami",
  "poShipToCountry": "US",
  "poShipToState": "FL"
}
```
