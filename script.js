document.getElementById("analyzeBtn").addEventListener("click", async function () {

  const fileInput = document.getElementById("resumeInput");
  const jobDescription = document.getElementById("jobDescription").value;
  const resultsDiv = document.getElementById("results");

  
  resultsDiv.innerHTML = "";

  
  if (!fileInput.files[0]) {
    resultsDiv.innerHTML = "<p>Please upload a resume file.</p>";
    resultsDiv.classList.add('visible');
    return;
  }
  
  if (!jobDescription.trim()) {
    resultsDiv.innerHTML = "<p>Please enter a job description.</p>";
    resultsDiv.classList.add('visible');
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  try {
  
    const response = await fetch("https://api.affinda.com/v1/resumes", {
      method: "POST",
      headers: {
        "Authorization": "Bearer aff_910f0ff0c8266368ebc22b5cb70e7bdd8aef7a22", 
      },
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to analyze the resume.");

    const resumeData = await response.json();
    console.log(resumeData);

    
    const resumeSkills = resumeData.data.skills ? resumeData.data.skills.map(skill => skill.name.toLowerCase()) : [];
    const jobDescriptionNormalized = jobDescription.toLowerCase();

    
    const fuzzyMatch = (keyword, skillsArray) => {
      return skillsArray.filter(skill => skill.includes(keyword)).length > 0;
    };

   
    const jobKeywords = jobDescriptionNormalized.split(/\s+/);

    
    const matchedKeywords = jobKeywords.filter(keyword => fuzzyMatch(keyword, resumeSkills));
    const score = ((matchedKeywords.length / jobKeywords.length) * 100).toFixed(2);

    
    const missingSkills = jobKeywords.filter(keyword => !resumeSkills.includes(keyword));

   
    resultsDiv.innerHTML = `
      <h3 style="font-family: 'Kaushan Script', sans-serif; color: #2f4f4f"><strong>RESULTS</strong></h3>
      <p><strong>OVERALL PERFORMANCE :</strong> ${score}%</p>
      <p><strong>KEYWORDS IDENTIFIED :</strong> ${matchedKeywords.join(", ") || "None"}</p>
      <p><strong>RECOMMENDATIONS :</strong> Add more relevant skills like ${missingSkills.join(", ") || "None"}.</p>
      <h4>GENERAL SUGGESTIONS FOR IMPROVEMENT :</h4>
      <ul>
        <li><strong>Highlight measurable achievements:</strong> Include specific accomplishments with numbers (e.g., "Increased sales by 20%" or "Reduced operational costs by 15%"). This gives potential employers a clearer picture of your impact.</li>
        <br>
        <li><strong>Showcase relevant certifications:</strong> Make sure to list any certifications or professional courses related to the role you're applying for, such as "Certified Cloud Practitioner" or "Project Management Professional (PMP)".</li>
        <br>
        <li><strong>Tailor your resume to each job:</strong> Customize your resume for every application, focusing on the skills and experience most relevant to the specific role. This can greatly improve your chances of getting noticed.</li>
        <br>
        <li><strong>Keep it concise and focused:</strong> A well-structured, concise resume is key. Try to keep your resume to one or two pages, focusing on the most relevant and recent experiences. Avoid cluttering it with unnecessary details.</li>
        <br>
        <li><strong>Optimize for Applicant Tracking Systems (ATS):</strong> Ensure your resume uses common keywords and phrases that ATS might search for. Avoid overloading your resume with keywords, but make sure it aligns with the job description.</li>
      </ul>
    `;

  } catch (error) {
    console.error("Error details:", error);
    resultsDiv.innerHTML = `<p>Error: ${error.message}. Please check your inputs and try again.</p>`;
  }

 
  resultsDiv.classList.add('visible');
});
