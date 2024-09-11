const hideBtn = document.querySelector("#more-information") as HTMLButtonElement
const hiddenInformation = document.querySelector(".hide") 
hideBtn.addEventListener("click",()=>{
    hiddenInformation?.classList.toggle("hide")
});
// generate btn
const genBtn = document.getElementById("Generate-button")as HTMLButtonElement
// user image
const image = document.getElementById("image") as HTMLImageElement
const userImage = document.getElementById("input-image") as HTMLInputElement;
 function ImgSrcChange(){
    image.src = URL.createObjectURL(userImage.files[0])
}
// resumediv
const resumeDiv =document.getElementById("outputHide") as HTMLDivElement;

console.log(resumeDiv);

function resume ():void{
    resumeDiv.removeAttribute("id")
    resumeDiv.scrollIntoView({behavior:"smooth"})
};
// changing button
const changingBtn = document.getElementById("changes-btn")
function Rewrite():void{
    resumeDiv.setAttribute("id","outputHide")
}
// skill function
const skill1 = document.getElementById("option1") as HTMLInputElement;
const skill2 = document.getElementById("option2") as HTMLInputElement;
const skill3 = document.getElementById("option3") as HTMLInputElement;
const skill4 = document.getElementById("option4") as HTMLInputElement;
const userSkill1 = document.getElementById("user-skill1") as HTMLOutputElement;
const userSkill2 = document.getElementById("user-skill2") as HTMLOutputElement;
const userSkill3 = document.getElementById("user-skill3") as HTMLOutputElement;
const userSkill4 = document.getElementById("user-skill4") as HTMLOutputElement;
function displayCheckboxValue(){
    const ischecked1 = skill1.checked
    const ischecked2 = skill2.checked
    const ischecked3 = skill3.checked
    const ischecked4 = skill4.checked
    if(ischecked1){
    userSkill1.textContent = skill1.value
    }
    if(ischecked2){
        userSkill2.textContent = skill2.value
    }
    if(ischecked3){
        userSkill3.textContent = skill3.value
    }
    if(ischecked4){
        userSkill4.textContent = skill4.value
    }
}


//user input

const Name = document.getElementById("name") as HTMLInputElement;
const number = document.getElementById("number") as HTMLInputElement;
const email= document.getElementById("email") as HTMLInputElement;
const education = document.getElementById("education") as HTMLInputElement;
const experience = document.getElementById("experience") as HTMLInputElement;
// output 
const userName = document.getElementById("user-name") as HTMLOutputElement ;
const userNumber = document.getElementById("user-number") as HTMLOutputElement;
const userEmail = document.getElementById("user-email") as HTMLOutputElement;
const userEducation = document.getElementById("user-education") as HTMLOutputElement;
const userExperience = document.getElementById("user-experience") as HTMLOutputElement;


// function to create resume
function userResume():void{
     userName.textContent = Name.value
     const numberInput = parseFloat (number.value)
     userNumber.textContent = numberInput.toString()
     userEmail.textContent = email.value
     userEducation.textContent = education.value
     userExperience.textContent = experience.value
     

     resume()
     ImgSrcChange()
};
genBtn.addEventListener("click",userResume)
changingBtn.addEventListener("click",Rewrite)
genBtn.addEventListener("click",displayCheckboxValue)


