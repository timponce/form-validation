const submitBtn = document.querySelector("#submit");
const inputs = document.querySelectorAll("input");

export function submitForm() {
  submitBtn.addEventListener("click", (e) => {
    inputs.forEach((element) => {
      if (!element.checkValidity()) {
        element.nextElementSibling.innerHTML = element.validationMessage;
      } else {
        element.nextElementSibling.innerHTML = "";
      }
      if (element.id === "password-confirm") {
        console.log(document.querySelector("#password").value);
        console.log(element.value);
        if (element.value === "") {
          element.nextElementSibling.innerHTML = element.validationMessage;
        } else if (
          element.value === document.querySelector("#password").value
        ) {
          element.nextElementSibling.innerHTML = "";
          element.setCustomValidity("");
        } else if (
          element.value !== document.querySelector("#password").value
        ) {
          element.setCustomValidity("Passwords need to match.");
          e.preventDefault();
          e.stopPropagation();
          element.nextElementSibling.innerHTML = element.validationMessage;
        }
      }
    });
  });
}
