const quizData = [
  {
    question: "What is your favorite ADO song?",
    options: [
      "FREEDOM 🔥🔥",
      "USSEEWA 🤫🤫",
      "RuLe ✨✨",
      "New genesis 🤨?",
      "They are all peak! We should just focus on appreciating her music instead of engaging in senseless wars",
    ],
    answer: "FREEDOM 🔥🔥",
    answer2:
      "They are all peak! We should just focus on appreciating her music instead of engaging in senseless wars",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result-container");
const submitFormButton = document.getElementById("submit-form");
const formResult = document.getElementById("form-result");

let currentQuestion = 0;
let score = 0;
let selectedButton = null;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const allButtons = optionsElement.querySelectorAll(".quiz-option");
  allButtons.forEach((btn) => {
    btn.classList.remove("correct", "incorrect");
  });

  selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;
  const answer2 = quizData[currentQuestion].answer2;

  if (
    selectedButton.innerText === answer ||
    selectedButton.innerText === answer2
  ) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
}

function showAnswer() {
  resultContainer.innerHTML = `<div class="result">✅ You got ${score} out of ${
    quizData.length
  } correct! ${
    score === quizData.length
      ? "Perfect score! You're a true ADO fan! 🎉"
      : "Not bad, but you could learn more about ADO! 😉"
  }</div>`;
}

// Collect form data and submit to webhook
function collectFormData() {
  const nameInput = document.querySelector(".text-input");
  const loveRating1 = document.getElementById("slider1").value;
  const loveRating2 = document.getElementById("slider2").value;
  const showExperience = document.querySelector(
    'input[name="ado-show"]:checked'
  );
  const showDescription = document.querySelectorAll(".text-input")[1];
  const quizAnswer = selectedButton ? selectedButton.innerText : null;

  return {
    name: nameInput.value || "",
    loveRating1: parseInt(loveRating1),
    loveRating2: parseInt(loveRating2),
    attendedShow: showExperience ? showExperience.value : "",
    showExperience: showDescription ? showDescription.value : "",
    quizAnswer: quizAnswer,
    quizScore: score,
    submittedAt: new Date().toISOString(),
  };
}

async function submitForm() {
  try {
    submitFormButton.disabled = true;
    submitFormButton.textContent = "Submitting...";

    const formData = collectFormData();
    console.log("Form data to submit:", formData);

    // Check if we're in Claude.ai artifact environment
    const isClaudeArtifact =
      window.location.hostname.includes("claude.ai") ||
      window.location.hostname.includes("anthropic.com");

    if (isClaudeArtifact) {
      // In Claude.ai artifacts, we can't make external requests due to CSP
      formResult.innerHTML = `
              <div class="result">
                <strong>📋 Form Data Ready!</strong><br><br>
                <em>Due to security restrictions in Claude.ai artifacts, I can't send the data directly. 
                Here's your form data to copy/save:</em><br><br>
                <textarea style="width: 100%; height: 200px; font-family: monospace; font-size: 12px; padding: 8px; border: 1px solid #dadce0; border-radius: 4px;" readonly>${JSON.stringify(
                  formData,
                  null,
                  2
                )}</textarea>
                <br><br>
                <small>💡 To enable automatic submission: Save this HTML file and open it in your browser, or host it on your own website.</small>
              </div>`;
      return;
    }

    // This will work when the form is used outside Claude.ai
    const response = await fetch(
      "https://loud007.app.n8n.cloud/webhook-test/9ed298e5-588a-4779-9a02-c04eb3071d6e",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log("Response status:", response.status);

    if (response.ok) {
      formResult.innerHTML =
        '<div class="result">🎉 Form submitted successfully! Thank you for sharing your love for ADO!</div>';
    } else {
      const errorText = await response.text();
      console.error("Response error:", errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Submit error:", error);
    let errorMessage = "❌ Failed to submit form. ";

    if (error.name === "TypeError" && error.message.includes("fetch")) {
      errorMessage +=
        "Network error - please check your connection or try again later.";
    } else if (error.message.includes("CORS")) {
      errorMessage +=
        "CORS error - the webhook may need to allow cross-origin requests.";
    } else {
      errorMessage += `Error: ${error.message}`;
    }

    formResult.innerHTML = `<div style="background: #fce8e6; border: 1px solid #ea4335; border-radius: 4px; padding: 16px; color: #c5221f; font-size: 14px; margin-top: 16px;">${errorMessage}</div>`;
  } finally {
    submitFormButton.disabled = false;
    submitFormButton.textContent = "Submit Form 🚀";
  }
}

// Range slider functionality
const slider1 = document.getElementById("slider1");
const slider1Value = document.getElementById("slider1-value");
const slider2 = document.getElementById("slider2");
const slider2Value = document.getElementById("slider2-value");

slider1.addEventListener("input", function () {
  slider1Value.textContent = slider1.value;
});

slider2.addEventListener("input", function () {
  slider2Value.textContent = slider2.value;
});

// Initialize
submitButton.addEventListener("click", showAnswer);
submitFormButton.addEventListener("click", submitForm);
showQuestion();
