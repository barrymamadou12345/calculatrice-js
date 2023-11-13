

/************************************/
let affiche = "0";
let nomb1;
let nomb2;
let egalo = document.querySelector('#egalo');


function ajoutEcran() {
  let screen = document.querySelector("#screen");
  screen.textContent = affiche;
};
let signCalcul = (signo) => {
  let signes = document.querySelector('#signes');
  signes.textContent = signo;
};
let signEgale = () => {
  egalo.textContent = "=";
};
let PlaceRetour = () => {
  let retour = document.querySelector('#retour');
  retour.textContent = `${affiche}`;
};

function addToScreen(value) {
 if (affiche === "0") {
    affiche = value;
  } else {
    affiche += value;
  }
  nomb2 = parseFloat(affiche); // Nombre Deux
  ajoutEcran();
};

function Appel(nom, id) {
  nom = document.querySelector(id)
}
Appel(ega, '#ega');
Appel(res, '#res');



function resultPus(bena) {
  if (res.textContent !== "") {
    bena.addEventListener('click', () => {
      res.textContent = "";
      egalo.textContent = ""
    })
  }
}



/////////////////////////////

function Revo(ber) {
  ber.addEventListener('click', function () {
    if (res.textContent !== "") {
      retour.textContent = ""
      signes.textContent = "" /// REVOIR CETTE PARTIE !!!!!!
      res.textContent = "";
      affiche = parseFloat(ber.textContent);
      egalo.textContent = ""
      ajoutEcran();
    }
  })
}
Appel(un, '#un'); Revo(un);
Appel(deux, '#deux'); Revo(deux);
Appel(trois, '#trois'); Revo(trois);
Appel(quatre, '#quatre'); Revo(quatre);
Appel(cinq, '#cinq'); Revo(cinq);
Appel(six, '#six'); Revo(six);
Appel(sept, '#sept'); Revo(sept);
Appel(huit, '#huit'); Revo(huit);
Appel(neuf, '#neuf'); Revo(neuf);
Appel(zero, '#zero'); Revo(zero);
Appel(point, '#point'); Revo(point);

function Addition() { // L'addition
  PlaceRetour();
  signCalcul('+');

  affiche = "0";
  nomb1 = parseFloat(retour.textContent); // Nombre un
  console.log(affiche);
  ajoutEcran();
  ega.addEventListener('click', () => { // la touche egale
    res.textContent = nomb1 + nomb2;
    affiche = res.textContent///////////////////REVOIR ICI
    resultPus(additionner);
    signEgale();
  });
};

function Soustac() { // La Soustracion
  PlaceRetour();
  signCalcul('-');
  nomb1 = parseFloat(retour.textContent); // Nombre un
  affiche = "0";
  ajoutEcran();
  ega.addEventListener('click', () => {
    res.textContent = nomb1 - nomb2;
    affiche = res.textContent///////////////////REVOIR ICI
    resultPus(soustraire);
    signEgale();
  });
}

function Multiplic() {// La Multiplication
  PlaceRetour();
  signCalcul('x');
  nomb1 = parseFloat(retour.textContent);
  affiche = "0";
  ajoutEcran();
  ega.addEventListener('click', () => {
    res.textContent = nomb1 * nomb2;
    affiche = res.textContent///////////////////REVOIR ICI
    resultPus(multiplier);
    signEgale();
  });
}

function Divise() { // La Division
  PlaceRetour();
  signCalcul('/');
  nomb1 = parseFloat(retour.textContent);
  affiche = "0";
  ajoutEcran();
  ega.addEventListener('click', () => {
    res.textContent = nomb1 / nomb2;
    affiche = res.textContent///////////////////REVOIR ICI
    resultPus(diviser);
    signEgale();
  });
}
let additionner = document.querySelector('#additionner');
additionner.addEventListener('click', () => {
  Addition();
});
// La soustraction
let soustraire = document.querySelector('#soustraire');
soustraire.addEventListener('click', () => {
  Soustac()
});
// La Multiplication
let multiplier = document.querySelector('#multiplier');
multiplier.addEventListener('click', () => {
  Multiplic()
});

// La Division
let diviser = document.querySelector('#diviser');
diviser.addEventListener('click', () => {
  Divise();
});




// la touche Pour effacer
function Efface() {
  Appel(ac, '#ac');
  ac.addEventListener('click', () => {
    affiche = "0";
    ajoutEcran();
    retour.textContent = "";
    res.textContent = "";
    signCalcul('');
    egalo.textContent = "";
  })
}
Efface();
let rtr = document.querySelector('#rtr');
rtr.addEventListener('click', () => {
  affiche = "0";
  ajoutEcran();
})
let av = document.querySelector('#av');
av.addEventListener('click', () => {
  retour.textContent = "";
});

//================ Clavier Manuel================ //

document.addEventListener("keydown", function (event) {
  // console.log(event);
  const toucheKey = event.key;
  if (!isNaN(toucheKey) || toucheKey === ".") {
    addToScreen(toucheKey);
  } else if (!isNaN(toucheKey) || toucheKey === "+") {
    Addition();
  } else if (!isNaN(toucheKey) || toucheKey === "-") {
    Soustac()
  } else if (!isNaN(toucheKey) || toucheKey === "*") {
    Multiplic()
  } else if (!isNaN(toucheKey) || toucheKey === "/") {
    Divise()
  } else if (toucheKey === "Enter" || toucheKey === "=") {
    if (signes.textContent === "+") {
      res.textContent = nomb1 + nomb2;
      signEgale();
    }
    if (signes.textContent === "-") {
      res.textContent = nomb1 - nomb2;
      signEgale();
    }
    if (signes.textContent === "x") {
      res.textContent = nomb1 * nomb2;
      signEgale();
    }
    if (signes.textContent === "/") {
      res.textContent = nomb1 / nomb2;
      signEgale();
    }
  } else if (toucheKey === "Backspace") {
    affiche = affiche.slice(0, -1);
    if (affiche === "") {
      affiche = "0";
    }
    ajoutEcran();
  }
  if (toucheKey === "ArrowLeft") {
    affiche = '0';
    ajoutEcran();
  }
  if (toucheKey === "ArrowRight") {
    retour.textContent = '0';
  }
});
ajoutEcran();












