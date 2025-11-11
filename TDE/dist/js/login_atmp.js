const SignUpBtn = document.getElementById("signup_btn");
const SubmitPhoneNumber = document.getElementById("login_phone_number");
const SubmitEmail = document.getElementById("login_email");

// Add an event listener to the submit button, so it redirects to a signup page
SignUpBtn.addEventListener("click", () => {
  try {
    window.open("./app/views/sign_up.html");
  } catch (error) {
    console.error("Error while opening the page", error);
  }
});

// Do the same but for the other buttons
SubmitPhoneNumber.addEventListener("click", () => {
  try {
    window.open("./app/views/login_phone.html");
  } catch (error) {
    console.error("Error while opening the page", error);
  }
});

SubmitEmail.addEventListener("click", () => {
  try {
    window.open("./app/views/login_email.html");
  } catch (error) {
    console.error("Error while opening the page", error);
  }
});
