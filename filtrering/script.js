/* ØVELSE FILTRERING */
const header = document.querySelector("header h1");
const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};
document.addEventListener("DOMXContentLoaded", start);
let personer;
let filter = "alle";
function start() {
  const filterKnapper = document.querySelectorAll("nav button");
  filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerPersoner));
  loadJSON();
}

function filtrerPersoner() {
  filter = this.dataset.troende;
  visPersoner();
}

async function loadJson() {
  const JSONData = await fetch("https://persongalleri-5d3e.restdb.io/rest/persongalleri", {
    headers: myHeaders,
  });
}

personer = await JSONData.json();
console.log("Personer", personer);
visPersoner();

function visPersoner() {
  const dest = document.querySelector("#liste");
  const skabelon = document.querySelector("template").content;
  dest.textContent = "";
  personer.forEach((person) => {
    console.log("Troende", person.troende);
    if (filter == person.troende || filter == "alle") {
      const klon = skabelon.cloneNode(true);
      klon.querySelector(".navn").textContent = person.fornavn + " " + person.efternavn;
      klon.querySelector(".img").src = url + person.billede;
      dest.appendChild(klon);
    }
  });
}

/* FRA TIDLIGERE PROJEKT 

const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const response = await fetch(endpoint, mereinfo);
  const json = await response.json();
  vis(json);
}

const main = document.querySelector("main");
const temp = document.querySelector("template").content;

function vis(json) {
  json.forEach((enPerson) => {
    const klon = temp.cloneNode(true);
    klon.querySelector(".img").src = "faces/" + enPerson.billede;
    klon.querySelector(".navn").textContent = enPerson.navn;
    klon.querySelector(".titel").textContent = enPerson.titel;
    klon.querySelector(".fødselsdag").textContent = enPerson.fødselsdag;
    klon.querySelector(".email").textContent = enPerson.efternavn;
    main.appendChild(klon);
  });
}

hentData(); 

*/
