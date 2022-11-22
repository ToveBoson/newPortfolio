let firstbar: HTMLDivElement = document.getElementById(
  "hamburger"
) as HTMLDivElement;
firstbar.addEventListener("click", rotateFirstBar);

function rotateFirstBar() {
  (document.getElementById("hamburger") as HTMLDivElement).classList.toggle(
    "open"
  );
}

let privateButton: HTMLButtonElement = document.getElementById(
  "privateButton"
) as HTMLButtonElement;
privateButton.addEventListener("click", () => {
  let descriptionPrivate: HTMLParagraphElement = document.getElementById(
    "descriptionPrivate"
  ) as HTMLParagraphElement;
  if (descriptionPrivate.style.display === "none") {
    descriptionPrivate.style.display = "block";
  } else {
    descriptionPrivate.style.display = "none";
  }
});

let careerButton: HTMLButtonElement = document.getElementById(
  "careerButton"
) as HTMLButtonElement;
careerButton.addEventListener("click", () => {
  let descriptioncareer: HTMLParagraphElement = document.getElementById(
    "descriptionCareer"
  ) as HTMLParagraphElement;
  if (descriptioncareer.style.display === "none") {
    descriptioncareer.style.display = "block";
  } else {
    descriptioncareer.style.display = "none";
  }
});

let educationButton: HTMLButtonElement = document.getElementById(
  "educationButton"
) as HTMLButtonElement;
educationButton.addEventListener("click", () => {
  let descriptionEducation: HTMLParagraphElement = document.getElementById(
    "descriptionEducation"
  ) as HTMLParagraphElement;
  if (descriptionEducation.style.display === "none") {
    descriptionEducation.style.display = "block";
  } else {
    descriptionEducation.style.display = "none";
  }
});
