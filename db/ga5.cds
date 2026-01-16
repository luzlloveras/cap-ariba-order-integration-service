entity Orders {
  key ID : UUID;
  documentNumber : String(20);
  supplierName : String(100);
  companyCode : String(10);
  status : String(30);
  poShipToCity : String(60);
  poShipToCountry : String(5);
  poShipToState : String(10);
}
