EDDdoc

const highRiskCountries = ["Afghanistan", "Algeria", "Angola", "Azerbaijan", "Bangladesh", "Belarus", "Bolivia", "Bosnia and Herzegovina", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Central African Republic", "Chad", "China", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of", "Côte d'Ivoire", "Cuba", "Djibouti", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Eswatani", "Ethiopia", "Gabon", "Guatemala", "Guinea", "Guinea-Bissau", "Haiti", "Honduras", "Iraq", "Kenya", "Kyrgyzstan", "Lao People's Democratic Republic", "Lebanon", "Liberia", "Libya", "Madagascar", "Mali", "Mauritania", "Mexico", "Mozambique", "Nepal", "Nicaragua", "Niger", "Nigeria", "North Sudan", "Pakistan", "Palestinian Territory", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Russia", "Somalia", "South Sudan", "Sri Lanka", "Syria", "Tajikistan", "Turkmenistan", "Uganda", "Ukraine", "Venezuela", "Vietnam", "Yemen", "Zimbabwe"];

function isHighRisk(val) {
  if (!val) return false;
  if (Array.isArray(val)) {
    return val.some(v => highRiskCountries.includes(v));
  }
  return highRiskCountries.includes(val);
}
let highRiskFound = false;
function scanForHighRisk(obj) {
  if (!obj || typeof obj !== 'object' || highRiskFound) return;
  for (let key in obj) {
    if (highRiskFound) break;
    const val = obj[key];
    if (typeof val === 'string' || Array.isArray(val)) {
      if (isHighRisk(val)) {
        highRiskFound = true;
        break;
      }
    }
    if (val && typeof val === 'object') {
      scanForHighRisk(val);
    }
  }
}

scanForHighRisk(data.tabContainerComp);

const amount = parseFloat(data.tabContainerComp.subscriptionAmount) || 0;
const highAmount = amount > 5000000;

if (!value) value = {};
if (typeof value === 'string') {
  try {
    value = JSON.parse(value);
  } catch (e) {
    value = {};
  }
}

if (!value.additionalDocRequests) value.additionalDocRequests = [];

const managedKeys = ["Proof of employment", "Proof of investment", "Proof of Gift/Inheritance", "Proof of other income"];
value.additionalDocRequests = value.additionalDocRequests.filter(req => !managedKeys.includes(req.name));

if (highRiskFound || highAmount) {
  const sof = data.tabContainerComp.sof || {};
  if (sof.a) {
    value.additionalDocRequests.push({
      name: "Proof of employment",
      mandatory: true,
      explanatoryNotes: "Please upload any of the following document types:\n\nLetter from Employer or contact of employment confirming inˀcome, occupation, name and address of the business\nCopy of payslip\nEmployer confirmation of salary\nA bank statement showing the salary from the employer\nEvidence of the person’s professional qualifications or membership of a professional body\nIncome tax returns\nA copy of a certificate of pension or letter of a pension provider"
    });
  }
  if (sof.b) {
    value.additionalDocRequests.push({
      name: "Proof of investment",
      mandatory: true,
      explanatoryNotes: "Please upload any of the following document types:\n\nCertified or notarised copy of the contract or investment agreement\nCopies of the relevant investment statements or other documents showing the value of the investment and its source\nBrokerage or investment account statements\nLegal or accounting documents reflecting the transaction and the amount"
    });
  }
  if (sof.c) {
    value.additionalDocRequests.push({
      name: "Proof of Gift/Inheritance",
      mandatory: true,
      explanatoryNotes: "Please upload any of the following document types:\n\nIn case of a gift, a letter from the donor explaining the source of the funds\nIn case of inheritance, a certified or notarised copy of the will or probate document\nDeed of gift\nA solicitor’s letter or legal document confirming the gift or inheritance"
    });
  }
  if (sof.d) {
    value.additionalDocRequests.push({
      name: "Proof of other income",
      mandatory: true,
      explanatoryNotes: "Please upload any document type that provides evidence on the source of funds and/or source of wealth."
    });
  }
}


const res = false;
const docs = row.EDDdoc.additionalDocRequests;
docs.forEach((ele)=>{
  if (ele.name == 'Proof of employment') res = true;
})

value = {}

if(res){
value.type = "Other";
value.purposesOfUse = ["ProofOfEmployment"];
value.fields = {};
value.customEvidenceType = component.label;
}
else{
value = ''
}
