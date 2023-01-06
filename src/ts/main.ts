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

export function createHtml(projects: IGitRepo[]) {
  const gitContainer: HTMLDivElement = document.getElementById(
    "gitRepo"
  ) as HTMLDivElement;
  const gitProjectTitle: HTMLHeadingElement = document.getElementById(
    "repoTitle"
  ) as HTMLHeadingElement;
  const gitrepoDescription: HTMLParagraphElement = document.getElementById(
    "repoDescription"
  ) as HTMLParagraphElement;

  for (let i = 0; i < projects.length; i++) {
    let title: HTMLHeadingElement = document.createElement("h3");
    let description: HTMLParagraphElement = document.createElement("p");
    let urlButton: HTMLButtonElement = document.createElement("button");
    let url: HTMLParagraphElement = document.createElement("p");
    let topics: HTMLParagraphElement = document.createElement("p");
    let container: HTMLDivElement = document.createElement("div");

    if (!projects[i].description) {
    } else {
      title.innerHTML = projects[i].name;
      description.innerHTML = projects[i].description;
      url.innerHTML = projects[i].html_url;
      topics.innerHTML = projects[i].topics;
      urlButton.innerHTML = "Klicka här";

      container.append(title);
      container.append(description);
      container.append(urlButton);
      urlButton.append(url);
      container.append(topics);

      gitContainer.classList.add("git-container");
      gitProjectTitle.classList.add("git-container__project-title");
      gitrepoDescription.classList.add("git-container__repo-description");
      container.classList.add("git-container__box");
      title.classList.add("git-container__box__header");
      description.classList.add("git-container__box__description");
      url.classList.add("git-container__box__url");
      urlButton.classList.add("git-container__box__button");
      topics.classList.add("git-container__box__topics");

      gitContainer.append(container);
    }
  }
}

getList();
