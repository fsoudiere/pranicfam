
export default function handler(req, res) {
    const body = req.body;
    const SibApiV3Sdk = require('sib-api-v3-sdk');

let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();

let createContact = new SibApiV3Sdk.CreateContact();

let attr = {
    "FIRSTNAME": body.fname,
    "SMS": body.phone,
    "WHATSAPP": body.phone,
    "DIET": body.diet,
    "REFERRAL": body.referral,
    "DRYFASTED": body.dry,
    "MOTIVE": body.motive,
    "INITIATION_STATUS": body.initiated,
    "AGE": body.age,
 }
createContact.email =  body.email,
createContact.attributes =  attr,
createContact.listIds = [29],
createContact.update_enabled= true

apiInstance.createContact(createContact).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});
}
