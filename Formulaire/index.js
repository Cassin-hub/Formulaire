const registration = document.querySelector("#registrationForm");

function registrationFunction() {
    const user = document.querySelector("#username");
    const lengthUser = 5;
    const error = document.querySelectorAll(".error-message");
    user.addEventListener("input", function () {
        if (user.value.length >= lengthUser) {
            error[0].textContent = "";
        } else {
            error[0].textContent = "Le nom doit contenir au minimum 5 caractères.";
        }
    });
    registration.addEventListener("submit", function (e) {
        let isValid = true;

        const mail = document.querySelector("#email");
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        if (regex.test(mail.value)) {
            error[1].textContent = "";
        } else {
            isValid = false;
            error[1].textContent = "L'adresse e-mail n'est pas valide.";
        }
        const key = document.querySelector("#password");
        const keyRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        if (keyRegex.test(key.value)) {
            error[2].textContent = "";
        } else {
            isValid = false;
            error[2].textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.";
        }
        const keyConfirm = document.querySelector("#confirmPassword");
        if (keyConfirm.value === key.value) {
            error[3].textContent = "";
        } else {
            isValid = false;
            error[3].textContent = "Les mots de passe doivent être identiques.";
        }
        if (!isValid) {
            e.preventDefault();
        }
    });
}

registrationFunction();

