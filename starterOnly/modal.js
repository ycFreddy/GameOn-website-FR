function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formDatas = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
var displayErrLoc = 1;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme la modale
modalClose.addEventListener("click", closeModal);

// Ferme la modale
function closeModal() {
  modalbg.style.display = "none";
}

/**
 * traitement du formulaire
 */
formDatas.forEach(function (element) {  
  NodeList.prototype.forEach = Array.prototype.forEach
  var children = element.childNodes;
  children.forEach(function(item){
      switch (item.name) {
        case "first" :
          // Traitement du Prénom
          const prenom = document.getElementById(item.name);
          const errPrenom = document.querySelector('.errPrenom');
          prenom.addEventListener('input', function(efirst) {  
            if (efirst.target.value.length>=2) errPrenom.style.display = "none";
            else errPrenom.style.display = "block";
          });
          break;
        case "last" :
          // Traitement du Nom
          const nom = document.getElementById('last');
          const errNom = document.querySelector('.errNom');
          nom.addEventListener('input', function(e) {  
            if (e.target.value.length>=2) errNom.style.display = "none";
            else errNom.style.display = "block";
          });
          break;
        case "email" :
          // Traitement de l'email
          const email = document.getElementById('email');
          const errEmail = document.querySelector('.errEmail');
          const regexpMail= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
          email.addEventListener('input', function(e) {
            var testEmail = regexpMail.test(e.target.value);
            if (testEmail) errEmail.style.display = "none";
            else errEmail.style.display = "block";
          });
          break;
        case "birthdate" :
          // Traitement de la date d'anniversaire
          const date = document.getElementById('birthdate');
          const errDate = document.querySelector('.errDate');
          const regexpDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
          date.addEventListener('input', function(e) {
            var testDate = regexpDate.test(e.target.value);
            if (testDate) errDate.style.display = "none";
            else errDate.style.display = "block";
          });
          break;
        case "quantity" :
          // Traitement du Nombre de participation au tournois
          const nbrTournois = document.getElementById('quantity');
          const errNbr = document.querySelector('.errNbr');
          nbrTournois.addEventListener('input', function(e) {  
            if (e.target.value>=0) errNbr.style.display = "none";
            else errNbr.style.display = "block";
          });
          break;
        case "location" :

          break;
        case "cu" :

          break;
    }
  });
});

// Traitement des conditions d'utilisation
const cu = document.getElementById("checkbox1");
const errCuMsg = document.querySelector('.errcheckbox1');
cu.addEventListener("click", clickcu);
function clickcu() {
  if (cu.checked == false)  errCuMsg.style.display = "block";
  else errCuMsg.style.display = "none";
}

// Traitement du lieu
var displayErrLoc = 1;
//const radios = document.querySelectorAll('input[name="location"]');
const radios = document.getElementsByName("location");
const errLocMsg = document.querySelector('.errlocation');
radios.forEach((elem) => {  
  elem.addEventListener("change", checkradio);
});
function checkradio() {
  errLocMsg.style.display = "none";
  displayErrLoc = 0;
};


/**
* Vérification du formulaire
*/
function validate(event) {  
  // Vérification de location  
  if (displayErrLoc != 0){
    errLocMsg.style.display = "block";    
    event.preventDefault();
    if(event.preventDefault) alert("toto");
  }
  else {
    var lieuValide = 1;
  }
  
  // Vérification Condition d'utilisation
  if (cu.checked == false){
    errCuMsg.style.display = "block";    
    event.preventDefault();
  }
  else {
    var cuValide = 1;
  }
  
  if (lieuValide == 1 && cuValide == 1){
    const valide = document.querySelector('.modal-body');
    valide.innerHTML = '<div class="msgValide">Merci !<br><br>Votre réservation a été reçue.</div>';
  }
}
