const togglePasswordVisibility = (inputElement, toggleElement) => {
    if (inputElement.type === "password") {
        inputElement.type = "text";
        toggleElement.innerHTML = '<i class="bi bi-eye"></i>'; 
    } else {
        inputElement.type = "password";
        toggleElement.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}

const passwordInput3 = document.getElementById("passBe");
const togglePassword3 = document.getElementById("togglePassword3");

togglePassword3.addEventListener("click", ()=> {
    togglePasswordVisibility(passwordInput3, togglePassword3);
});