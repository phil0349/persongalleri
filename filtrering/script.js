/* ØVELSE FILTRERING */
const header = document.querySelector("h1");
const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

let filter = "alle";
let data;

const filterKnapper = document.querySelectorAll("nav button");
filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerPersoner));
hentData();

function filtrerPersoner() {
  filter = this.dataset.troende;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  vis(data);
  header.textContent = this.textContent;
}

async function hentData() {
  const response = await fetch(endpoint, mereinfo);
  data = await response.json();
  vis(data);
}

function vis() {
  const main = document.querySelector("main");
  const temp = document.querySelector("template").content;
  main.textContent = "";
  data.forEach((person) => {
    console.log("Troende", person.troende);
    if (filter == person.troende || filter == "alle") {
      const klon = temp.cloneNode(true);
      klon.querySelector(".billede").src = "faces/" + person.billede;
      klon.querySelector(".navn").textContent = person.fornavn;
      main.appendChild(klon);
    }
  });
}

hentData();

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
