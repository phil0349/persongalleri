let container = document.querySelector("section");
let temp = document.querySelector("template");

const fil = "persongalleri.json";

async function hentdata(fil) {
  const resultat = await fetch(fil);
  const json = await resultat.json();
  vis(json);
}

function vis(personer) {
  personer.forEach((enPerson) => {
    let klon = temp.cloneNode(true).content;
    klon.querySelector("h2").textContent = enPerson.navn;
    klon.querySelector(".født").textContent = enPerson.født;
    klon.querySelector("img").src = enPerson.billede;
    container.appendChild(klon);
  });
}

hentdata(fil);
