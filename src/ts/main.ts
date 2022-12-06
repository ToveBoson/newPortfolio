import { IGitRepo } from "../models/IGitRepo";
import { getList } from "./services/repoService";

window.addEventListener("load", () => {
  const loadingHero: HTMLDivElement = document.getElementById(
    "hero__text"
  ) as HTMLDivElement;
  loadingHero.classList.add("loaded");
});

let firstbar: HTMLDivElement = document.getElementById(
  "hamburger"
) as HTMLDivElement;
firstbar.addEventListener("click", rotateFirstBar);

function rotateFirstBar() {
  (document.getElementById("hamburger") as HTMLDivElement).classList.toggle(
    "open"
  );
  (document.getElementById("toggleShow") as HTMLUListElement).classList.toggle(
    "toggleShow"
  );
}

let descriptionPrivate: HTMLParagraphElement = document.getElementById(
  "descriptionPrivate"
) as HTMLParagraphElement;
let descriptionCareer: HTMLParagraphElement = document.getElementById(
  "descriptionCareer"
) as HTMLParagraphElement;
let descriptionEducation: HTMLParagraphElement = document.getElementById(
  "descriptionEducation"
) as HTMLParagraphElement;

let privateButton: HTMLButtonElement = document.getElementById(
  "privateButton"
) as HTMLButtonElement;
privateButton.addEventListener("click", () => {
  descriptionPrivate.classList.toggle("toggleShow");
  descriptionCareer.classList.remove("toggleShow");
  descriptionEducation.classList.remove("toggleShow");
});

let careerButton: HTMLButtonElement = document.getElementById(
  "careerButton"
) as HTMLButtonElement;
careerButton.addEventListener("click", () => {
  descriptionCareer.classList.toggle("toggleShow");
  descriptionPrivate.classList.remove("toggleShow");
  descriptionEducation.classList.remove("toggleShow");
});

let educationButton: HTMLButtonElement = document.getElementById(
  "educationButton"
) as HTMLButtonElement;
educationButton.addEventListener("click", () => {
  descriptionEducation.classList.toggle("toggleShow");
  descriptionCareer.classList.remove("toggleShow");
  descriptionPrivate.classList.remove("toggleShow");
});

let button: HTMLButtonElement = document.getElementById(
  "gitRepo__todoButton"
) as HTMLButtonElement;
button.addEventListener("click", () => {
  getList();
});

export function createHtml(projects: IGitRepo[]) {
  let container: HTMLDivElement = document.getElementById(
    "gitRepo"
  ) as HTMLDivElement;

  for (let i = 0; i < projects.length; i++) {
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLParagraphElement = document.createElement("p");
    let url: HTMLParagraphElement = document.createElement("p");

    if (!projects[i].description) {
    } else {
      title.innerHTML = projects[i].name;
      description.innerHTML = projects[i].description;
      url.innerHTML = projects[i].html_url;

      container.appendChild(title);
      container.appendChild(description);
      container.appendChild(url);
    }
  }
}
