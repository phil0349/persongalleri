let container = document.querySelector("section");
let temp = document.querySelector("template");

const fil = "alleDyr.json";

async function hentdata(fil) {
  const resultat = await fetch(fil);
  const json = await resultat.json();
  vis(json);
}

function vis(dyr) {
  dyr.forEach((etDyr) => {
    let klon = temp.cloneNode(true).content;
    klon.querySelector("h2").textContent = etDyr.navn;
    klon.querySelector(".art").textContent = etDyr.type;
    klon.querySelector(".sted").textContent = etDyr.levested;
    klon.querySelector("img").src = etDyr.billede;
    container.appendChild(klon);
  });
}

hentdata(fil);
