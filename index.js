document.getElementById("submit-button").addEventListener("click", function(event){
  const initialPassword = document.getElementById("initial-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  console.log("initialPassword: ", initialPassword);
  console.log("confirmPassword: ", confirmPassword);
  if (initialPassword === confirmPassword){
    alert("Account created successfully!");
  }else {
    event.preventDefault();
    alert("Password and confirm password do not match. Try again...");
  }
});