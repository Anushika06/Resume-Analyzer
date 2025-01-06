# Resume-Analyzer
Resume Analyzer is a simple web-based application that allows users to analyze their resume against a job description. The tool evaluates the resume by scoring how well it matches the job description, identifies relevant keywords, and provides general suggestions to help improve the resume.

Deployment Link: https://anushika06.github.io/Resume-Analyzer/

FEATURES

• Resume Analysis: Upload a resume file and compare it against a job description.

• Keyword Matching: The tool identifies key skills and experiences from both the job description and the resume.

• Resume Score: Provides a performance score based on how well the resume matches the job description.

• Suggestions for Improvement: Offers general recommendations to help improve your resume.

• ATS Optimization: Focuses on aligning your resume with keywords that are commonly used in Applicant Tracking Systems (ATS).



DEMO

• Example Input:

Resume: Upload a PDF, DOCX, or TXT file.

Job Description: Paste the job description into the text area.

• Example Output:

Overall Performance: 85%

Keywords Identified: Python, Machine Learning, Data Analysis

Recommendations: Add more relevant skills like SQL, Cloud Computing.

General Suggestions for Improvement:
1. Highlight measurable achievements like increasing sales or reducing costs.
  
2. Showcase certifications like PMP or AWS Certified Solutions Architect.
  
3. Tailor your resume to each job, focusing on the most relevant skills and experience.
  
4. Keep your resume concise, focusing on the most recent experiences.
   
5. Optimize for ATS by using relevant keywords.



INSTALLATION

Follow these steps to set up the Resume Analyzer on your local machine.

Clone the repository:

git clone https://github.com/Anushika06/Resume-Analyzer.git

Open the project folder:

cd resume-analyzer

No additional setup is required for running this web-based tool. You only need to open the index.html file in a web browser.


USAGE

1. Open the Application

Open the index.html file in your browser (any modern browser will work).

2. Upload Resume and Enter Job Description

3. Click the "Choose File" button to upload a PDF, DOCX, or TXT file containing your resume.

4. Paste the job description in the provided text area.
  
5. Analyze the Resume

Click the Analyze button to start the analysis.

The tool will process the data, score the resume based on the match with the job description, display matched keywords, and suggest improvements.


PROJECT STRUCTURE

• index.html: The main HTML file that structures the web page.

• script.js: The JavaScript code that handles the resume analysis and displays results.

• style.css: The CSS file that styles the application interface.

Fonts: Google Fonts (Lato, Kaushan Script, and Quicksand) used for styling text.


REQUIREMENTS

No special software is required other than a web browser to use the tool. The backend uses the Affinda API to process and analyze resumes.


FUNCTIONING

• Resume Upload: Users upload a resume in PDF, DOCX, or TXT format.

• Job Description Input: Users paste the job description into the provided textarea.

• API Call: The tool sends the uploaded resume to the Affinda API, which extracts key skills and details from the resume.

• Keyword Matching: The application compares the skills extracted from the resume with keywords from the job description.

• Scoring and Recommendations: The app calculates a performance score, displays matched keywords, and suggests improvements.


ACKNOWLEDGEMENTS

• Affinda API for the resume analysis.

• Google Fonts for providing beautiful fonts.

• Thanks to OpenAI for providing inspiration behind this project.
