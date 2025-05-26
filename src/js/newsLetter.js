const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();

let createContact = new SibApiV3Sdk.CreateContact();

createContact.listIds = [5];

// createContact.email = 'examsdple@example.com';
// apiInstance.createContact(createContact).then(function(data) {
//   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
// }, function(error) {
//   console.error(error);
// });


const alertSuccess = document.getElementsByClassName("alert-success");
const alertError = document.getElementsByClassName("alert-danger");
const alertWarning = document.getElementsByClassName("alert-warning");


setTimeout(() => {
  const input = document.getElementById("email");
  const button = document.getElementById("button");
 
  let email = "";
  input.addEventListener("change", (event) => {
    email = event.target.value;
  });
  button.addEventListener("click", function () {
    if (email != "") {
      createContact.email = email;
      apiInstance.createContact(createContact).then(
        function (data) {
          input.value = "";
          alertSuccess[0].classList.add("show");
          setTimeout(() => {
            alertSuccess[0].classList.remove("show");
          }, 2000);
        },
        function (error) {
          alertError[0].classList.add("show");
          setTimeout(() => {
            alertError[0].classList.remove("show");
          }, 2000);
        }
      );
    } else {
      alertWarning[0].classList.add("show");
      console.log("ss");
      setTimeout(() => {
        alertWarning[0].classList.remove("show");
      }, 2000);
    }
  });
}, 1000);


setTimeout(() => {
  const input = document.getElementById("emailMobal");
  const button = document.getElementById("buttonMobal");

  let emails = "";
  input.addEventListener("change", (event) => {
    emails = event.target.value;
  });
  button.addEventListener("click", function () {
    if (emails != "") {
      createContact.email = emails;
      apiInstance.createContact(createContact).then(
        function (data) {
          input.value = "";
          alertSuccess[0].classList.add("show");
          setTimeout(() => {
            alertSuccess[0].classList.remove("show");
          document.querySelector('.close').click();
          }, 2000);
        },
        function (error) {
          alertError[0].classList.add("show");
          setTimeout(() => {
            alertError[0].classList.remove("show");
          }, 2000);
        }
      );
    } else {
      alertWarning[0].classList.add("show");
      console.log("ss");
      setTimeout(() => {
        alertWarning[0].classList.remove("show");
      }, 2000);
    }
  });
}, 1000);
