var resume = document.getElementById('Resume-generated');
var form = document.getElementById('resumeForm');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name').value;
    var emailElement = document.getElementById('email').value;
    var phoneElement = document.getElementById('phone').value;
    var qualificationElement = document.getElementById('qualification').value;
    var experienceElement = document.getElementById('Experience').value;
    var skillsElement = document.getElementById('Skills').value;
    // --Generated Resume
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(nameElement, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(emailElement, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phoneElement, "</span></p>\n<h3>Qualification</h3>\n<p contenteditable=\"true\">").concat(qualificationElement, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experienceElement, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skillsElement, "</p>\n");
    // Display the generated resume
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
var sharableLink = document.getElementById("shareable-link");
sharableLink === null || sharableLink === void 0 ? void 0 : sharableLink.addEventListener("click", function () {
});
var downloadPdf = document.getElementById("DownloadPDF");
downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
    window.print();
});
