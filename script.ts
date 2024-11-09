const resume = document.getElementById('Resume-generated') as HTMLDivElement;
const form = document.getElementById('resumeForm') as HTMLFormElement;
form.addEventListener("submit", (event:Event)=>{
    event.preventDefault();
    
const nameElement = (document.getElementById('name') as HTMLInputElement).value;
const emailElement = (document.getElementById('email') as HTMLInputElement).value; 
const phoneElement = (document.getElementById('phone') as HTMLInputElement).value;
var qualificationElement = (document.getElementById('qualification') as HTMLInputElement).value;
const experienceElement = (document.getElementById('Experience') as HTMLInputElement).value;
const skillsElement = (document.getElementById('Skills') as HTMLInputElement).value;

// --Generated Resume
const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${nameElement}</span></p>
<p><b>Email:</b><span contenteditable="true">${emailElement}</span></p>
<p><b>Phone:</b><span contenteditable="true">${phoneElement}</span></p>
<h3>Qualification</h3>
<p contenteditable="true">${qualificationElement}</p>

<h3>Experience</h3>
<p contenteditable="true">${experienceElement}</p>

<h3>Skills</h3>
<p contenteditable="true">${skillsElement}</p>
`;

// Display the generated resume
if( resume) {
    resume.innerHTML = resumeHTML;
    }else {
    console.error('The resume display element is missing.');
    }

});
const sharableLink = document.getElementById("shareable-link") as HTMLAnchorElement
sharableLink?.addEventListener("click",()=>{

})
const downloadPdf = document.getElementById("DownloadPDF") as HTMLAnchorElement
downloadPdf?.addEventListener("click",()=>{
    window.print()
})
