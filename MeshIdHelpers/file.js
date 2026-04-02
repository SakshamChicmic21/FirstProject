value = {}

if (row.chooseType === 'individual') {
  value.TypeOfInvestor = "NaturalPerson";
  value.FirstName = row.first;
  value.LastName = row.last;
  value.MiddleNames = row.middle || "";
  value.FormerFirstNames = row.formerNames || {};
  value.EmailAddress = row.email || "";
  value.DateOfBirth = row.dob || "";
  value.Nationality = row.nationality || "";
  value.CountryOfBirth = row.countryOfBirth.value || "";
  value.CountryOfResidence = row.address_Country.value || "";
  value.Occupation = row.occupation || "";
  value.AddressStreet = (row.addressLine1 || "") + " " + (row.addressLine2 || "") + " " + (row.addressLine3 || "");
  value.AddressPostalCode = row.postalCode || "";
  value.AddressCity = row.city || "";
  value.AddressCountry = row.address_Country.value || "";  
} else if (row.chooseType === 'entity') {
  value.TypeOfInvestor = "LegalPerson";
  value.Type = row.chooseType || "";
  value.RegisteredName = row.registeredName || "";
  value.CountryOfRegistration = row.jurisdiction || "";
  value.RegistrationNumber = row.registrationNumber || "";
  value.TradeNames = row.formerNames || {};
  value.DateOfRegistration = row.doeT || "";
  value.RegisteredAddressStreet = (row.addressLine1 || "") + " " + (row.addressLine2 || "") + " " +(row.addressLine3 || "");
  value.RegisteredAddressPostalCode = row.postalCode || "";
  value.RegisteredAddressCity = row.city || "";
  value.RegisteredAddressCountry = row.address_Country || "";
}