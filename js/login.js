document.getElementById("submit-btn").addEventListener("click", function () {
  //email

  const emailField = document.getElementById("input-email");
  const userEmail = emailField.value;

  //pass
  const passField = document.getElementById("input-password");
  const userPassword = passField.value;
  console.log(userPassword);

  emailField.value = "";
  passField.value = "";

  if (userEmail === "biplob@gmail.com" && userPassword === "biplob") {
    window.location.href = "home.html";
  } else {
    alert("Please enter correct email and password");
  }
});
