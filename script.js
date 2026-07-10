// ---------- INPUT FIELDS ----------

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const websiteInput = document.getElementById("website");

const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
const instagramInput = document.getElementById("instagram");

// ---------- CARD TEXT ----------

const cardName = document.getElementById("cardName");
const cardJob = document.getElementById("cardJob");
const cardCompany = document.getElementById("cardCompany");
const cardEmail = document.getElementById("cardEmail");
const cardPhone = document.getElementById("cardPhone");
const cardWebsite = document.getElementById("cardWebsite");

const cardLinkedin = document.getElementById("cardLinkedin");
const cardGithub = document.getElementById("cardGithub");
const cardInstagram = document.getElementById("cardInstagram");

// ---------- LIVE PREVIEW ----------

nameInput.addEventListener("input", () => {
    cardName.textContent = nameInput.value || "Your Name";
});

jobInput.addEventListener("input", () => {
    cardJob.textContent = jobInput.value || "Job Title";
});

companyInput.addEventListener("input", () => {
    cardCompany.textContent = companyInput.value || "Company Name";
});

emailInput.addEventListener("input", () => {
    cardEmail.textContent = emailInput.value || "Email";
});

phoneInput.addEventListener("input", () => {
    cardPhone.textContent = phoneInput.value || "Phone";
});

websiteInput.addEventListener("input", () => {
    cardWebsite.textContent = websiteInput.value || "Website";
});

linkedinInput.addEventListener("input", () => {
    cardLinkedin.textContent = linkedinInput.value || "LinkedIn";
});

githubInput.addEventListener("input", () => {
    cardGithub.textContent = githubInput.value || "GitHub";
});

instagramInput.addEventListener("input", () => {
    cardInstagram.textContent = instagramInput.value || "Instagram";
});

// ---------- PROFILE IMAGE ----------

const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

imageUpload.addEventListener("change", function(){

    const file = imageUpload.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            profileImage.src = e.target.result;

        };

        reader.readAsDataURL(file);

    }

});

// ---------- TEMPLATE CHANGE ----------

const templateSelect = document.getElementById("templateSelect");

const card = document.querySelector(".card");

templateSelect.addEventListener("change", function(){

    card.classList.remove("template1");
    card.classList.remove("template2");
    card.classList.remove("template3");

    card.classList.add(templateSelect.value);

});