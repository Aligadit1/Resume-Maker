"use strict";
// downloadButton
const downloadBtn = document.getElementById("pdfButton");
downloadBtn.addEventListener("click", () => {
    window.print();
});
// skillToggle
const hideBtn = document.querySelector("#more-information");
const hiddenInformation = document.querySelector(".hide");
hideBtn.addEventListener("click", () => {
    hiddenInformation === null || hiddenInformation === void 0 ? void 0 : hiddenInformation.classList.toggle("hide");
});
// languageToggle
const langToggle = document.getElementById("langBtn");
const languages = document.getElementById("langForm");
langToggle.addEventListener("click", () => {
    languages.classList.toggle("hide");
});
// generate btn
const genBtn = document.getElementById("Generate-button");
// user image
const image = document.getElementById("outImage");
const userImage = document.getElementById("input-image");
function ImgSrcChange() {
    if (userImage && userImage.files[0]) {
        image.src = URL.createObjectURL(userImage.files[0]);
    }
}
// resumediv
const resumeDiv = document.getElementById("hide");
// btnDiv
const btnDiv = document.getElementById("btnDiv");
function resume() {
    btnDiv.classList.remove("hide");
    resumeDiv.removeAttribute("id");
    resumeDiv.scrollIntoView({ behavior: "smooth" });
}
// changing button
const changingBtn = document.getElementById("changes-btn");
function Rewrite() {
    resumeDiv.setAttribute("id", "hide");
    btnDiv.classList.add("hide");
}
// languageFunction
const inLang1 = document.getElementById("in-language1");
const inLang2 = document.getElementById("in-language2");
const inLang3 = document.getElementById("in-language3");
const inLang4 = document.getElementById("in-language4");
const inLang5 = document.getElementById("in-language5");
const inLang6 = document.getElementById("in-language6");
const inLang7 = document.getElementById("in-language7");
const outLang1 = document.getElementById("out-language1");
const outLang2 = document.getElementById("out-language2");
const outLang3 = document.getElementById("out-language3");
const outLang4 = document.getElementById("out-language4");
const outLang5 = document.getElementById("out-language5");
const outLang6 = document.getElementById("out-language6");
const outLang7 = document.getElementById("out-language7");
const liL1 = document.getElementById("li-l1");
const liL2 = document.getElementById("li-l2");
const liL3 = document.getElementById("li-l3");
const liL4 = document.getElementById("li-l4");
const liL5 = document.getElementById("li-l5");
const liL6 = document.getElementById("li-l6");
const liL7 = document.getElementById("li-l7");
function displayLanguageValue() {
    const isLangchecked1 = inLang1.checked;
    const isLangchecked2 = inLang2.checked;
    const isLangchecked3 = inLang3.checked;
    const isLangchecked4 = inLang4.checked;
    const isLangchecked5 = inLang5.checked;
    const isLangchecked6 = inLang6.checked;
    const isLangchecked7 = inLang7.checked;
    //now adding prof value
    const engRadio = document.querySelector("input[name='1langProf']:checked");
    const urduRadio = document.querySelector("input[name='2langProf']:checked");
    const frenchRadio = document.querySelector("input[name='3langProf']:checked");
    const spanishRadio = document.querySelector("input[name='4langProf']:checked");
    const arabicRadio = document.querySelector("input[name='5langProf']:checked");
    const russianRadio = document.querySelector("input[name='6langProf']:checked");
    const germanRadio = document.querySelector("input[name='7langProf']:checked");
    if (isLangchecked1) {
        outLang1.innerText = inLang1.value;
        liL1.classList.remove("hide");
        if (engRadio) {
            outLang1.innerText = inLang1.value + ": " + engRadio.value;
        }
    }
    if (isLangchecked2) {
        outLang2.innerText = inLang2.value;
        liL2.classList.remove("hide");
        if (urduRadio) {
            outLang2.innerText = inLang2.value + ": " + urduRadio.value;
        }
    }
    if (isLangchecked3) {
        outLang3.innerText = inLang3.value;
        liL3.classList.remove("hide");
        if (frenchRadio) {
            outLang3.innerText = inLang3.value + ": " + frenchRadio.value;
        }
    }
    if (isLangchecked4) {
        outLang4.innerText = inLang4.value;
        liL4.classList.remove("hide");
        if (spanishRadio) {
            outLang4.innerText = inLang4.value + ": " + spanishRadio.value;
        }
    }
    if (isLangchecked5) {
        outLang5.innerText = inLang5.value;
        liL5.classList.remove("hide");
        if (arabicRadio) {
            outLang5.innerText = inLang5.value + ": " + arabicRadio.value;
        }
    }
    if (isLangchecked6) {
        outLang6.innerText = inLang6.value;
        liL6.classList.remove("hide");
        if (russianRadio) {
            outLang6.innerText = inLang6.value + ": " + russianRadio.value;
        }
    }
    if (isLangchecked7) {
        outLang7.innerText = inLang7.value;
        liL7.classList.remove("hide");
        if (germanRadio) {
            outLang7.innerText = inLang7.value + ": " + germanRadio.value;
        }
    }
}
// languageProficiencyToggleFunctionAndAddInOutput
document.addEventListener("DOMContentLoaded", () => {
    const allLanguages = document.querySelectorAll(".allLanguages1to7");
    const engProf = document.getElementById("lang1Profficiency");
    const urduProf = document.getElementById("lang2Profficiency");
    const frenchProf = document.getElementById("lang3Profficiency");
    const spanishProf = document.getElementById("lang4Profficiency");
    const arabicProf = document.getElementById("lang5Profficiency");
    const russianProf = document.getElementById("lang6Profficiency");
    const germanProf = document.getElementById("lang7Profficiency");
    // function
    function toggleProficiencyVisiblity() {
        const isLangchecked1 = inLang1.checked;
        const isLangchecked2 = inLang2.checked;
        const isLangchecked3 = inLang3.checked;
        const isLangchecked4 = inLang4.checked;
        const isLangchecked5 = inLang5.checked;
        const isLangchecked6 = inLang6.checked;
        const isLangchecked7 = inLang7.checked;
        if (isLangchecked1) {
            engProf.classList.remove("hide");
        }
        else {
            engProf.classList.add("hide");
        }
        if (isLangchecked2) {
            urduProf.classList.remove("hide");
        }
        else {
            urduProf.classList.add("hide");
        }
        if (isLangchecked3) {
            frenchProf.classList.remove("hide");
        }
        else {
            frenchProf.classList.add("hide");
        }
        if (isLangchecked4) {
            spanishProf.classList.remove("hide");
        }
        else {
            spanishProf.classList.add("hide");
        }
        if (isLangchecked5) {
            arabicProf.classList.remove("hide");
        }
        else {
            arabicProf.classList.add("hide");
        }
        if (isLangchecked6) {
            russianProf.classList.remove("hide");
        }
        else {
            russianProf.classList.add("hide");
        }
        if (isLangchecked7) {
            germanProf.classList.remove("hide");
        }
        else {
            germanProf.classList.add("hide");
        }
    }
    allLanguages.forEach((element) => {
        element.addEventListener("click", toggleProficiencyVisiblity);
    });
});
// skill function
const inSkill1 = document.getElementById("in-skill1");
const inSkill2 = document.getElementById("in-skill2");
const inSkill3 = document.getElementById("in-skill3");
const inSkill4 = document.getElementById("in-skill4");
const outSkill1 = document.getElementById("out-skill1");
const outSkill2 = document.getElementById("out-skill2");
const outSkill3 = document.getElementById("out-skill3");
const outSkill4 = document.getElementById("out-skill4");
const liS1 = document.getElementById("li-s1");
const liS2 = document.getElementById("li-s2");
const liS3 = document.getElementById("li-s3");
const liS4 = document.getElementById("li-s4");
function displayCheckboxValue() {
    const ischecked1 = inSkill1.checked;
    const ischecked2 = inSkill2.checked;
    const ischecked3 = inSkill3.checked;
    const ischecked4 = inSkill4.checked;
    if (ischecked1) {
        outSkill1.textContent = inSkill1.value;
        liS1.classList.remove("hide");
    }
    if (ischecked2) {
        outSkill2.textContent = inSkill2.value;
        liS2.classList.remove("hide");
    }
    if (ischecked3) {
        outSkill3.textContent = inSkill3.value;
        liS3.classList.remove("hide");
    }
    if (ischecked4) {
        outSkill4.textContent = inSkill4.value;
        liS4.classList.remove("hide");
    }
}
//user input
const Name = document.getElementById("in-name");
const Passion = document.getElementById("in-passion");
const number = document.getElementById("in-number");
const email = document.getElementById("in-email");
const about = document.getElementById("in-about");
const education = document.getElementById("in-education");
const experience = document.getElementById("in-experience");
// output
const userName = document.getElementById("out-name");
const userPassion = document.getElementById("out-passion");
const userNumber = document.getElementById("out-number");
const userEmail = document.getElementById("out-email");
const userAbout = document.getElementById("out-about");
const userEducation = document.getElementById("out-education");
const userExperience = document.getElementById("out-experience");
// function to create resume
function userResume() {
    userName.textContent = Name.value || "Your Name Here";
    userPassion.textContent = Passion.value || "Your Passion Here";
    userNumber.textContent = number.value || "Your Number Here";
    userEmail.textContent = email.value || "Your Email Here";
    userEducation.textContent = education.value || "Your education Here";
    userExperience.textContent = experience.value || "Your Experience Here";
    userAbout.textContent = about.value || "Your About Here";
    resume();
    ImgSrcChange();
    displayLanguageValue();
    displayCheckboxValue();
    trimName();
}
//EditableFunctionality
userName.addEventListener("click", () => {
    userName.contentEditable = "true";
});
userPassion.addEventListener("click", () => {
    userPassion.contentEditable = "true";
});
userNumber.addEventListener("click", () => {
    userNumber.contentEditable = "true";
});
userEmail.addEventListener("click", () => {
    userEmail.contentEditable = "true";
});
userEducation.addEventListener("click", () => {
    userEducation.contentEditable = "true";
});
userExperience.addEventListener("click", () => {
    userExperience.contentEditable = "true";
});
userAbout.addEventListener("click", () => {
    userAbout.contentEditable = "true";
});
// ShareAble and uniqueURL based on users name
function generateShareableLink(name) {
    const baseURL = window.location.origin + window.location.pathname;
    const URL = `${baseURL}?${encodeURIComponent(name)}`;
    return URL;
}
function trimName() {
    const name = Name.value.trim() || "Your Name Here";
    userName.textContent = name;
    const ShareableLink = generateShareableLink(name);
    alert(`Your Link: ${ShareableLink}`);
}
genBtn.addEventListener("click", userResume);
changingBtn === null || changingBtn === void 0 ? void 0 : changingBtn.addEventListener("click", Rewrite);
