import axios from "axios";
import { IList } from "../models/IList";

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

axios.get("https://api.github.com/users/ToveBoson/repos").then((response) => {
  // console.log(response.data);
});

function createHtml(repos: IList[]) {
  let container: HTMLDivElement = document.getElementById(
    "thirdPage"
  ) as HTMLDivElement;

  for (let i = 0; i < repos.length; i++) {
    let title: HTMLHeadingElement = document.createElement("h3");
    // title.innerHTML = repos[i];

    container.appendChild(title);
  }
}
