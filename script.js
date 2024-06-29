const fullName = document.getElementById("name");
const country = document.getElementById("country");
const zipcode = document.getElementById("zip");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agree = document.getElementById("agree");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const check5 = document.getElementById("check5");
const check6 = document.getElementById("check6");
const check7 = document.getElementById("check7");


const nameError = document.getElementById("nameError");
const countryError = document.getElementById("countryError");
const zipError = document.getElementById("zipError");
const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const agreeError = document.getElementById("agreeError");
const form = document.querySelector("form");



fullName.addEventListener("input", () => {
  if (fullName.validity.valid) {
    nameError.textContent = "";
    nameError.style.display = "none"
    fullName.style.background = "";
    check1.style.visibility = "visible";
  } else if (!fullName.validity.valid) {
    nameError.textContent = "You forgot to type something!"
    nameError.style.display = "block";
    fullName.style.background = "#ff7a7a";
    check1.style.visibility = "hidden";

  }
});

country.addEventListener("input", () => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.style.display = "none"
    country.style.background = "";
    check2.style.visibility = "visible";
  } else if (!country.validity.valid) {
    countryError.textContent = "You forgot to type something!"
    countryError.style.display = "block";
    country.style.background = "#ff7a7a";
    check2.style.visibility = "hidden";
  }
});

zipcode.addEventListener("input", () => {
  if (zipcode.validity.valid) {
    zipError.textContent = "";
    zipError.style.display = "none"
    zipcode.style.background = "";
    check3.style.visibility = "visible";
  } else if (!country.validity.valid) {
    zipError.textContent = "Zip Code must be in xxxxx format!"
    zipError.style.display = "block";
    zipcode.style.background = "#ff7a7a";
    check3.style.visibility = "hidden";
  }
});

username.addEventListener("input", () => {
  if (username.validity.valid) {
    userError.textContent = "";
    userError.style.display = "none"
    username.style.background = "";
    check4.style.visibility = "visible";
  } else if (!username.validity.valid) {
    userError.textContent = "The username must be at least 6 characters!"
    userError.style.display = "block";
    username.style.background = "#ff7a7a";
    check4.style.visibility = "hidden";
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.style.display = "none"
    email.style.background = "";
    check5.style.visibility = "visible";
  } else if (!email.validity.valid) {
    emailError.textContent = "Please input a valid Email!"
    emailError.style.display = "block";
    email.style.background = "#ff7a7a";
    check5.style.visibility = "hidden";
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.style.display = "none"
    password.style.background = "";
    check6.style.visibility = "visible";
  } else if (!password.validity.valid) {
    passwordError.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!"
    passwordError.style.display = "block";
    password.style.background = "#ff7a7a";
    check6.style.visibility = "hidden";
  }
});

confirmPassword.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    confirmPasswordError.textContent = "";
    confirmPasswordError.style.display = "none"
    confirmPassword.style.background = "";
    check7.style.visibility = "visible";
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "The passwords must match"
    confirmPasswordError.style.display = "block";
    confirmPassword.style.background = "#ff7a7a";
    check7.style.visibility = "hidden";
  }
});

agree.addEventListener("click", () => {
  if (agree.validity.valid) {
    agreeError.textContent = "";
    agreeError.style.display = "none"
  } else if (!agree.validity.valid) {
    agreeError.textContent = "You must read the Terms and Conditions!"
    agreeError.style.display = "block";
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!fullName.validity.valid || !country.validity.valid || !zipcode.validity.valid || !username.validity.valid || !email.validity.valid | !password.validity.valid || password.value !== confirmPassword.value || !agree.validity.valid) {
    if (fullName.validity.valid) {
      nameError.style.display = "none";
      fullName.style.background = "";
    } else if (!fullName.validity.valid) {
      nameError.textContent = "You forgot to type something!"
      nameError.style.display = "block";
      fullName.style.background = "#ff7a7a";
    }

    if (country.validity.valid) {
      countryError.style.display = "none";
      country.style.background = "";
    } else if (!country.validity.valid) {
      countryError.textContent = "You forgot to type something!"
      countryError.style.display = "block";
      country.style.background = "#ff7a7a";
    }

    if (zipcode.validity.valid) {
      zipError.style.display = "none";
      zipcode.style.background = "";
    } else if (!zipcode.validity.valid) {
      zipError.textContent = "Zip Code must be in xxxxx format!"
      zipError.style.display = "block";
      zipcode.style.background = "#ff7a7a";
    }

    if (username.validity.valid) {
      userError.style.display = "none";
      username.style.background = "";
    } else if (!username.validity.valid) {
      userError.textContent = "The username must be at least 6 characters!"
      userError.style.display = "block";
      username.style.background = "#ff7a7a";
    }

    if (email.validity.valid) {
      emailError.style.display = "none";
      email.style.background = "";
    } else if (!email.validity.valid) {
      emailError.textContent = "Please input a valid Email!"
      emailError.style.display = "block";
      email.style.background = "#ff7a7a";
    }

    if (password.validity.valid) {
      passwordError.style.display = "none";
      password.style.background = "";
    } else if (!password.validity.valid) {
      passwordError.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!"
      passwordError.style.display = "block";
      password.style.background = "#ff7a7a";
    }

    if (confirmPassword.validity.valid) {
      confirmPasswordError.style.display = "none";
      confirmPassword.style.background = "";
    } else if (!confirmPassword.validity.valid) {
      confirmPasswordError.textContent = "The passwords must match"
      confirmPasswordError.style.display = "block";
      confirmPassword.style.background = "#ff7a7a";
    }

    if (agree.validity.valid) {
      agreeError.style.display = "none";
    } else if (!agree.validity.valid) {
      agreeError.textContent = "You must read the Terms and Conditions!"
      agreeError.style.display = "block";
    }
  } else {
    alert('form sent');
    fullName.value = "";
    country.value = "";
    zipcode.value = "";
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    agree.value = "";
    check1.style.visibility = "hidden";
    check2.style.visibility = "hidden";
    check3.style.visibility = "hidden";
    check4.style.visibility = "hidden";
    check5.style.visibility = "hidden";
    check6.style.visibility = "hidden";
    check7.style.visibility = "hidden";

  }
})


