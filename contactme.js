// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDudL7Q4HHe-mZKx8s3_3sCXqHVJUgql6M",
    authDomain: "thannaxportfolio.firebaseapp.com",
    projectId: "thannaxportfolio",
    storageBucket: "thannaxportfolio.appspot.com",
    messagingSenderId: "28308442203",
    appId: "1:28308442203:web:f5974834ecc5b13465837e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference contact info collections
  let contact = firebase.database().ref("myportfolio");

  //Listen for the submit

  var contForm = document.querySelector(".contactForm");

  contForm.addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();

      //get input values
      let name = document.querySelector(".username").value;
      let email = document.querySelector(".userEmail").value;
      let message = document.querySelector(".userMessage").value;
      console.log(name, email, message);

      saveContactInfo(name, email, message);

      document.querySelector(".contactForm").reset();

      sendEmail(name, email, message);

  }

  //Save infos to firebase
  function saveContactInfo(name, email, message){
    let newContactInfo = contact.push();

      newContactInfo.set({
          Name : name,
          Email: email,
          Message: message,
      })
  }

  //send email function
  function sendEmail(name, email, message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abordajechristeljoy@gmail.com",
        Password : "rgtirwafjnhnwzkd",
        To : 'abordajechristeljoy@gmail.com',
        From : `${email}`,
        Subject : `${name} sent you a message!`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    })
    .then((message) => alert("mail sent successfully"));
  }