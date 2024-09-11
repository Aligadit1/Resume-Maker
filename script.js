const hideBtn = document.querySelector("#more-information");
const hiddenInformation = document.querySelector(".hide");
hideBtn.addEventListener("click", () => {
    hiddenInformation === null || hiddenInformation === void 0 ? void 0 : hiddenInformation.classList.toggle("hide");
});
// generate btn
const genBtn = document.getElementById("Generate-button");
// user image
const image = document.getElementById("image");
const userImage = document.getElementById("input-image");
function ImgSrcChange() {
    image.src = URL.createObjectURL(userImage.files[0]);
}
// resumediv
const resumeDiv = document.getElementById("outputHide");
console.log(resumeDiv);
function resume() {
    resumeDiv.removeAttribute("id");
    resumeDiv.scrollIntoView({ behavior: "smooth" });
}
;
// changing button
const changingBtn = document.getElementById("changes-btn");
function Rewrite() {
    resumeDiv.setAttribute("id", "outputHide");
}
// skill function
const skill1 = document.getElementById("option1");
const skill2 = document.getElementById("option2");
const skill3 = document.getElementById("option3");
const skill4 = document.getElementById("option4");
const userSkill1 = document.getElementById("user-skill1");
const userSkill2 = document.getElementById("user-skill2");
const userSkill3 = document.getElementById("user-skill3");
const userSkill4 = document.getElementById("user-skill4");
function displayCheckboxValue() {
    const ischecked1 = skill1.checked;
    const ischecked2 = skill2.checked;
    const ischecked3 = skill3.checked;
    const ischecked4 = skill4.checked;
    if (ischecked1) {
        userSkill1.textContent = skill1.value;
    }
    if (ischecked2) {
        userSkill2.textContent = skill2.value;
    }
    if (ischecked3) {
        userSkill3.textContent = skill3.value;
    }
    if (ischecked4) {
        userSkill4.textContent = skill4.value;
    }
}
//user input
const Name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
// output 
const userName = document.getElementById("user-name");
const userNumber = document.getElementById("user-number");
const userEmail = document.getElementById("user-email");
const userEducation = document.getElementById("user-education");
const userExperience = document.getElementById("user-experience");
// function to create resume
function userResume() {
    userName.textContent = Name.value;
    const numberInput = parseFloat(number.value);
    userNumber.textContent = numberInput.toString();
    userEmail.textContent = email.value;
    userEducation.textContent = education.value;
    userExperience.textContent = experience.value;
    resume();
    ImgSrcChange();
}
;
genBtn.addEventListener("click", userResume);
changingBtn.addEventListener("click", Rewrite);
genBtn.addEventListener("click", displayCheckboxValue);
