const input = document.querySelector("#input");
const imgDigi = document.querySelector("#img-digi");
const digiTitle = document.querySelector(".card-title");
const digiText = document.querySelector(".card-text");

const fetchAPI = async () => {
  const url = 'https://digimon-api.vercel.app/api/digimon';
  const data = await response.json();

  return data;
}

async function digiCard({ target }) {
  const digiArr = await fetchAPI();

  const find = digiArr.find(
    ({ name }) => name.toLowerCase() === target.value.toLowerCase()
  );

  localStorage.setItem("digimon", JSON.stringify(find));

  if (!find) return alert("Digimon não encontrado");

  const { name, img, level } = find;

  const storedDigimon = JSON.parse(locationStorage.getItem("digimon"));

  if (storedDigimon) {
    const {
      name: storedName,
      img: storedImg,
      level: storedLevel,
    } = storedDigimon;
    imgDigi.src = storedImg;
    digiTitle.innerText = storedName;
    digiText.innerText = `${storedName} Digimon do tipo ${storedLevel}`
  }
  else {
    imgDigi.src = img;
    digiTitle.innerText = name;
    digiText.innerText = `${name} Digimon do tipo ${level}`
  }

}

function digiAPI() {
  input.addEventListener('change', digiCard)
    
}

window.onload = () => digiAPI();
