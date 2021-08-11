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
var lieuValide = false;
var cuValide = false;

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
  // Ajoute la propriété tableau foreach sur NodeList
  NodeList.prototype.forEach = Array.prototype.forEach;
  element.childNodes.forEach(function(item){    
      switch (item.name) {           
        // Traitement du Prénom     
        case "first" :          
          item.addEventListener('input', function(e) {  
            if (e.target.value.length>=2) item.nextElementSibling.style.display = "none";
            else item.nextElementSibling.style.display = "block";
          });
          break;
        // Traitement du Nom
        case "last" :        
          item.addEventListener('input', function(e) {  
            if (e.target.value.length>=2) item.nextElementSibling.style.display = "none";
            else item.nextElementSibling.style.display = "block";
          });
          break;
        // Traitement de l'email
        case "email" :
          const regexpMail= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
          item.addEventListener('input', function(e) {
            var testEmail = regexpMail.test(e.target.value);
            if (testEmail) item.nextElementSibling.style.display = "none";
            else item.nextElementSibling.style.display = "block";
          });
          break;
        // Traitement de la date d'anniversaire
        case "birthdate" :
          const regexpDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
          item.addEventListener('input', function(e) {
            var testDate = regexpDate.test(e.target.value);
            if (testDate) item.nextElementSibling.style.display = "none";
            else item.nextElementSibling.style.display = "block";
          });
          break;
        // Traitement du Nombre de participation au tournois
        case "quantity" :          
          item.addEventListener('input', function(e) {  
            if (e.target.value>0) item.nextElementSibling.style.display = "none";
            else item.nextElementSibling.style.display = "block";
          });
          break;
        // Traitement du lieu
        case "location" :
          const radios = document.getElementsByName(item.name);
          const errLocMsg = document.querySelector('.errlocation');
          radios.forEach((elem) => {
            elem.addEventListener("change", function (e) {
            errLocMsg.style.display = "none";
            lieuValide = true;
            });
          });
          break;
        // Traitement des conditions d'utilisation
        case "cu" :          
          item.addEventListener("click", function (e) {
            cuValide = item.checked;
            if (item.checked == false) item.nextElementSibling.nextElementSibling.style.display = "block";
            else item.nextElementSibling.nextElementSibling.style.display = "none";
          });
          break;
      }
  });
});

/**
* Vérification du formulaire
*/
function validate(event) {    
  if (lieuValide && cuValide){
    const valide = document.querySelector('.modal-body');
    valide.innerHTML = '<div class="msgValide">Merci !<br><br>Votre réservation a été reçue.</div>';
  }
  else {
    event.preventDefault();
  }
}