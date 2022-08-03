const teamMates = [];

teamMates.push(
  {
    name: `Wayne Barnett`,
    role: `Founder & CEO`,
    image: `wayne-barnett-founder-ceo.jpg`,
  },
  {
    name: `Angela Caroll`,
    role: `Chief Editor`,
    image: `angela-caroll-chief-editor.jpg`,
  },
  {
    name: `Walter Gordon`,
    role: `Office Manager`,
    image: `walter-gordon-office-manager.jpg`,
  },
  {
    name: `Angela Lopez`,
    role: `Social Media Manager`,
    image: `angela-lopez-social-media-manager.jpg`,
  },
  {
    name: `Scott Estrada`,
    role: `Developer`,
    image: `scott-estrada-developer.jpg`,
  },
  {
    name: `Barbara Ramos`,
    role: `Graphic Designer`,
    image: `barbara-ramos-graphic-designer.jpg`,
  }
);

// const container = document.querySelector(`.container`);
// const membersList = document.createElement(`ul`);
// container.appendChild(membersList);

// for (i = 0; i < teamMates.length; i++) {
//   const li = document.createElement(`li`);
//   membersList.appendChild(li);
//   li.innerHTML =
//     `${teamMates[i].name}` + ` ${teamMates[i].role}` + ` ${teamMates[i].image}`;
// }

const row = document.querySelector(`.row`);

function createImgtagFromString(string) {
  imgPath = `./img/${string}`;
  return imgPath;
}

function createCard(name, role, img) {
  const card = document.createElement(`div`);
  card.className = `card`;

  const imgBox = document.createElement(`div`);
  imgBox.className = `card__imgbox`;
  card.appendChild(imgBox);

  const cardTitle = document.createElement(`h3`);
  cardTitle.className = `card__title`;
  cardTitle.innerHTML = name;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement(`p`);
  cardDescription.className = `card__description`;
  cardDescription.innerHTML = role;
  card.appendChild(cardDescription);

  const cardImage = document.createElement(`img`);
  cardImage.src = `${img}`;
  cardImage.className = `card__image`;
  imgBox.appendChild(cardImage);
  return card;
}

for (i = 0; i < teamMates.length; i++) {
  const img = createImgtagFromString(teamMates[i].image);
  const name = teamMates[i].name;
  const role = teamMates[i].role;
  const card = createCard(name, role, img);

  row.appendChild(card);
}
