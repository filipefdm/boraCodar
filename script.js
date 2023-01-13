let buttonImage = document.querySelector(".rotating");
let buttonClose = document.querySelector(".close");
let sofaImage = document.querySelector("#myImage");

buttonImage.addEventListener("click", () => {
  buttonImage.classList.add("hide");
  buttonClose.classList.remove("hide");
  sofaImage.src = "./assets/rotating-sofa.gif";
});

buttonClose.addEventListener("click", () => {
  buttonClose.classList.add("hide");
  buttonImage.classList.remove("hide");
  sofaImage.src = "./assets/sofa.png";
});
