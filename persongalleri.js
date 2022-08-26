const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";
const mereinfo = {
  header: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const response = await fetch(endpoint, mereinfo);
  const json = await response.json();
  console.log(json);
  vis(json);
}

//function vis(data) {
//  console.log(data);
//}
const main = document.querySelcetor("main");
const temp = document.querySelcetor("template").content;

function vis(json) {
  //console.log(json);
  json.forEach((person) => {
    const klon = temp.cloneNode(true).content;
    klon.querySelector(".img").src = "faces/" + person.billede;
    klon.querySelector(".navn").textContent = person.navn;
    klon.querySelector(".email").textContent = person.efternavn;
    klon.querySelector(".fødselsdag").textContent = person.fødselsdag;
    klon.querySelector(".titel").textContent = person.titel;
    //klon.querySelector(".religion").textContent = enPerson.religion;
    //klon.querySelector(".hobby").textContent = enPerson.hobby;
    container.appendChild(klon);
  });
}

hentData();

/*  HENTE DATA FRA RESTDB.IO

const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const options = {
  header: {
    'x-apikey': "600fe9211346a1524ff12e31"
  }
};

async function hentData() {
  const response = await fetch(endpoint, options);
  const json = await response.json();
  console.log(json);
  vis(json);
}

VIS JSON DATA I CONSOLEN

function vis(data) {
console.log(data);
}

function vis(dimser) {
    console.log(dimser);
    const container = document.querySelcetor("container");
    const skabelon = document.querySelcetor("template").content;
    dimser.forEach(dims => {
        const klon = skabelon.cloneNode(true);
    klon.querySelector(".emne").textContent = dims.emne;
    klon.querySelector(".pris").textContent = dims.pris + " kr.";
    klon.querySelector(".modtaget").textContent = "Modtaget d." + dims.modtaget.slice(0, 1)
    klon.querySelector("article").style.borderRadius = "1em";
    container.appendChild(klon);
  });
}
    }
}

hentData();

*/
