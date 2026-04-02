value = {}

if (row.chooseType === 'individual') {
  value.TypeOfInvestor = "NaturalPerson";
  value.FirstName = row.first;
  value.LastName = row.last;
  value.MiddleNames = row.middle || "";
  value.FormerFirstNames = row.formerGiven || "";
  value.FormerLastNames = row.formerSur || "";
  value.EmailAddress = row.email || "";
  value.DateOfBirth = row.dob || "";
  value.Nationality = row.nationality || "";
  value.CountryOfBirth = row.countryOfBirth.value || "";
  value.CountryOfResidence = row.address_Country.value || "";
  value.Occupation = row.occupation || "";
  value.AddressStreet = row.address || "";
  value.AddressPostalCode = row.postalCode || "";
  value.AddressCity = row.city || "";
  value.AddressCountry = row.address_Country.value || "";  
} else if (row.chooseType === 'entity') {
  value.TypeOfInvestor = "LegalPerson";
  value.Type = row.eType || "";
  value.RegisteredName = row.nameT || "";
  value.CountryOfRegistration = row.jurisdictionT || "";
  value.RegistrationNumber = row.registrationNumber || "";
  value.TradeNames = row.trading || "";
  value.DateOfRegistration = row.doeT || "";
  value.RegisteredAddressStreet = row.addressE || "";
  value.RegisteredAddressPostalCode = row.postalCodeE || "";
  value.RegisteredAddressCity = row.cityE || "";
  value.RegisteredAddressCountry = row.address_CountryE || "";
}