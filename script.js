"use strict";
const hideBtn = document.querySelector("#more-information");
const hiddenInformation = document.querySelector(".hide");
console.log(hiddenInformation);
console.log(hideBtn);
hideBtn.addEventListener("click", () => {
    hiddenInformation === null || hiddenInformation === void 0 ? void 0 : hiddenInformation.classList.toggle("hide");
});
