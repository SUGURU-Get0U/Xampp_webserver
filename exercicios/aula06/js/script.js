const form = document.getElementsById("signup-form");
const form_data = new FormData(form);

function SignUpCall() {
    var sendingData = fetch("php/signUp.php", {
        method: "POST",
        body: form_data
    });
    
}