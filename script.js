// Get input elements
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const websiteInput = document.getElementById("website");

// Get card elements
const cardName = document.getElementById("cardName");
const cardJob = document.getElementById("cardJob");
const cardCompany = document.getElementById("cardCompany");
const cardEmail = document.getElementById("cardEmail");
const cardPhone = document.getElementById("cardPhone");
const cardWebsite = document.getElementById("cardWebsite");

// Name
nameInput.addEventListener("input", function () {
    cardName.textContent = nameInput.value || "Your Name";
});

// Job
jobInput.addEventListener("input", function () {
    cardJob.textContent = jobInput.value || "Job Title";
});

// Company
companyInput.addEventListener("input", function () {
    cardCompany.textContent = companyInput.value || "Company Name";
});

// Email
emailInput.addEventListener("input", function () {
    cardEmail.textContent = emailInput.value || "Email";
});

// Phone
phoneInput.addEventListener("input", function () {
    cardPhone.textContent = phoneInput.value || "Phone";
});

// Website
websiteInput.addEventListener("input", function () {
    cardWebsite.textContent = websiteInput.value || "Website";
});