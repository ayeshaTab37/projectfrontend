// Select DOM elements
const startButton = document.getElementById("start-button");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");
const step5 = document.getElementById("step-5");
const resultSection = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const nextInterviewDisplay = document.getElementById("next-interview");
const backToStartButton = document.getElementById("back-to-start");

const basicInfoForm = document.getElementById("basic-info-form");
const educationForm = document.getElementById("education-form");
const hiringInfoForm = document.getElementById("hiring-info-form");
const mcqForm = document.getElementById("mcq-form");

// Show a specific step and hide others
function showStep(step) {
  [step1, step2, step3, step4, step5, resultSection].forEach((s) => (s.style.display = "none"));
  step.style.display = "block";
}

// Event listeners
startButton.addEventListener("click", () => {
  showStep(step2);
});

basicInfoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showStep(step3);
});

educationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showStep(step4);
});

hiringInfoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showStep(step5);
});

mcqForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate the score
  let score = 0;
  const correctAnswers = {
    question1: "Hyper Text Markup Language",
    question2: "JavaScript",
    question3: "Styling web pages",
    question4: "Creating interactive web pages",
    question5: "A collection of organized information",
    question6: "To store and deliver web pages",
    question7: "HTTPS is a secure version of HTTP",
    question8: "A software tool for managing changes to source code",
    question9: "B",
    question10: "D",
  };

  const formData = new FormData(mcqForm);

  formData.forEach((value, key) => {
    if (value === correctAnswers[key]) {
      score += 1;
    }
  });

  // Display the result
  scoreDisplay.textContent = `${score}/10`;

  // Set the next interview date dynamically (e.g., 7 days later)
  const today = new Date();
  const nextInterviewDate = new Date();
  nextInterviewDate.setDate(today.getDate() + 1);
  nextInterviewDisplay.textContent = nextInterviewDate.toLocaleDateString();

  showStep(resultSection);
});

backToStartButton.addEventListener("click", () => {
  showStep(step1);
});
