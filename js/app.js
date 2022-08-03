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

const container = document.querySelector(`.container`);
const membersList = document.createElement(`ul`);
container.appendChild(membersList);

for (i = 0; i < teamMates.length; i++) {
  const li = document.createElement(`li`);
  membersList.appendChild(li);
  li.innerHTML =
    `${teamMates[i].name}` + ` ${teamMates[i].role}` + ` ${teamMates[i].image}`;
}

function createImgtagFromString(string) {
  const img = document.createElement("img");
  img.src = `./img/${string}`;
  return img;
}

for (i = 0; i < teamMates.length; i++) {
  container.appendChild(createImgtagFromString(teamMates[i].image));
}
