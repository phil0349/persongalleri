/* ØVELSE 2 */

let ja = document.querySelector("troende");
let nej = document.querySelector("ikke-troende");
let tvivler = document.querySelector("tvivler");
let alle = document.querySelector("alle");

/* FRA TIDLIGERE PROJEKT */

const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const mereinfo = {
  header: {
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
