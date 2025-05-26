function sendEmail(email,comments,interest) {
  const emailTag = document.querySelector("#emaill");
  const commentsTag = document.querySelector("#comments");
  const interestTAg = document.querySelector("#interest");
  const submitBtnTAg = document.querySelector("#sendEmail");

    emailTag.value = email;
    commentsTag.value = comments;
    interestTAg.value = interest;
    submitBtnTAg.click();
}


const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();

let createContact = new SibApiV3Sdk.CreateContact();

createContact.listIds = [4];

// createContact.email = 'examsdple@example.com';
// apiInstance.createContact(createContact).then(function(data) {
//   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
// }, function(error) {
//   console.error(error);
// });

const alertSuccess = document.getElementsByClassName("alert-success");
const alertError = document.getElementsByClassName("alert-danger");
const alertWarning = document.getElementsByClassName("alert-warning");
const form = document.getElementById("signUp");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target[0].value;
  const interest = event.target[1].value;
  const comment = event.target[2].value;

  createContact.email = email;
  const attributes = {
    INTEREST: interest,
    COMMENTAIRE: comment,
  };
  createContact.attributes = attributes;

  if ((email !== "", interest !== undefined)) {
    apiInstance.createContact(createContact).then(
      function (data) {
        const email = event.target[0].value;
        const interest = event.target[1].value;
        const comment = event.target[2].value;
        sendEmail(email, interest, comment);
        event.target[0].value = "";
        event.target[1].value = "";
        alertError[0].classList.remove("show");
        alertWarning[0].classList.remove("show");

        alertSuccess[0].classList.add("show");
        setTimeout(() => {
          alertSuccess[0].classList.remove("show");
        }, 2000);
      },
      function (error) {
        alertSuccess[0].classList.remove("show");
        alertWarning[0].classList.remove("show");

        alertError[0].classList.add("show");
        setTimeout(() => {
          alertError[0].classList.remove("show");
        }, 2000);
      }
    );
  } else {
    alertSuccess[0].classList.remove("show");
    alertError[0].classList.remove("show");

    alertWarning[0].classList.add("show");
    setTimeout(() => {
      alertWarning[0].classList.remove("show");
    }, 2000);
  }
});
