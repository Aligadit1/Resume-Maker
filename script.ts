const hideBtn = document.querySelector("#more-information") as HTMLButtonElement
const hiddenInformation = document.querySelector(".hide") 
console.log(hiddenInformation);
console.log(hideBtn);
hideBtn.addEventListener("click",()=>{
    hiddenInformation?.classList.toggle("hide")
})