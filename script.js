let currentPageUrlCharacters = "https://rickandmortyapi.com/api/character";

let activeSection = "";
const cache = {}; // Simples cache para armazenar páginas já visitadas
const cache1 = {};

window.addEventListener("load", loadpage);
activeSection = "characters";
async function loadpage() {
  try {
    await loadCharacters(currentPageUrlCharacters);
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar cards");
  }

  const nextButton = document.getElementById("next-button");
  const backButton = document.getElementById("back-button");

  nextButton.addEventListener("click", loadNextPage);
  backButton.addEventListener("click", loadPreviousPage);
}

async function loadCharacters(url) {
  if (activeSection !== "characters") return; // Verifica se a seção ativa é "personagens"
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  try {
    // Verifica se a página já está no cache
    let responseJson;
    if (cache[url]) {
      responseJson = cache[url];
    } else {
      const response = await fetch(url);
      responseJson = await response.json();
      cache[url] = responseJson; // Armazena a página no cache
    }

    const fragment = document.createDocumentFragment(); // Fragmento para otimizar a manipulação do DOM

    responseJson.results.forEach((character) => {
      const card = document.createElement("div");
      card.style.backgroundImage = `url(${character.image})`;
      card.className = "cards";

      const characterNameBG = document.createElement("div");
      characterNameBG.className = "character-name-bg";

      const characterName = document.createElement("span");
      characterName.className = "character-name";
      characterName.innerHTML = `${character.name}`;

      characterNameBG.appendChild(characterName);
      card.appendChild(characterNameBG);

      card.onclick = () => {
        const modal = document.getElementById("modal");
        modal.style.visibility = "visible";

        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = "";

        const characterImage = document.createElement("div");
        characterImage.style.backgroundImage = `url(${character.image})`;
        characterImage.className = "character-image";

        const name1 = document.createElement("span");
        name1.className = "character-details";
        name1.innerText = `Nome:${character.name}`;

        const characterStatus = document.createElement("span");
        characterStatus.className = "character-details";
        characterStatus.innerText = `Status:${convertStatus(character.status)}`;

        const species = document.createElement("span");
        species.className = "character-details";
        species.innerText = `Especie:${convertSpecies(character.species)}`;

        const gender = document.createElement("span");
        gender.className = "character-details";
        gender.innerText = `Gênero:${convertGender(character.gender)}`;

        const origin = document.createElement("span");
        origin.className = "character-details";
        origin.innerText = `Origem:${character.origin.name}`;

        modalContent.appendChild(characterImage);
        modalContent.appendChild(name1);
        modalContent.appendChild(characterStatus);
        modalContent.appendChild(species);
        modalContent.appendChild(gender);
        modalContent.appendChild(origin);
      };
      fragment.appendChild(card); // Adiciona ao fragmento
    });
    mainContent.appendChild(fragment); // Insere tudo no DOM de uma vez

    updateButtons(responseJson);
    currentPageUrlCharacters = url;
  } catch (error) {
    alert("Erro ao carregar os personagens");
    console.log(error);
  }
}

function updateButtons(responseJson) {
  const nextButton = document.getElementById("next-button");
  const backButton = document.getElementById("back-button");

  nextButton.disabled = !responseJson.info.next;
  backButton.disabled = !responseJson.info.prev;

  backButton.style.visibility = responseJson.info.prev ? "visible" : "hidden";
}

async function loadNextPage() {
  if (!currentPageUrlCharacters) return;

  try {
    const responseJson =
      cache[currentPageUrlCharacters] ||
      (await (await fetch(currentPageUrlCharacters)).json());

    if (responseJson.info.next) {
      await loadCharacters(responseJson.info.next);
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar a próxima página");
  }
}

async function loadPreviousPage() {
  if (!currentPageUrlCharacters) return;

  try {
    const responseJson =
      cache[currentPageUrlCharacters] ||
      (await (await fetch(currentPageUrlCharacters)).json());

    if (responseJson.info.prev) {
      await loadCharacters(responseJson.info.prev);
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar a página anterior");
  }
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.visibility = "hidden";
}

function convertStatus(status) {
  return status;
}

function convertSpecies(species) {
  return species;
}

function convertGender(gender) {
  return gender;
}
