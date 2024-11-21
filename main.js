
const showModal = document.querySelector("#show-modal")

const registerModal = document.querySelector("#register-modal");
const loginModal = document.querySelector("#login-modal");

const closeRegisterBtn = document.querySelector("#close-register-modal");
const closeLoginBtn = document.querySelector("#close-login-modal");

const showRegister = document.querySelector("#show-register");
const showLogin = document.querySelector("#show-login");

showModal.addEventListener('click', () => {

  loginModal.style.display = 'flex';

});

closeLoginBtn.addEventListener('click', () => {

  loginModal.style.display = 'none';

});

closeRegisterBtn.addEventListener('click', () => {

  registerModal.style.display = 'none';

});

showRegister.addEventListener('click', () => {
  loginModal.style.display = 'none';
  registerModal.style.display = 'flex';

});

showLogin.addEventListener('click', () => {
  registerModal.style.display = 'none';
  loginModal.style.display = 'flex';

});

window.addEventListener('click', (e) => {
  console.log(e.target.id);

  if (e.target.id === "login-modal") {

    loginModal.style.display = "none";

  } else if (e.target.id === "register-modal") {

    registerModal.style.display = 'none';

  }

})

// Register User

const registerForm = document.querySelector("#register-form");


const confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener('input', (e) => {
  console.log(e.target.value);
  const registerPassword = document.querySelector("#register-pass").value.trim();
  if (!(e.target.value === registerPassword)) {
    // alert("Password do not match");
  }
})


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const registerName = document.querySelector("#name").value.trim();
  const registerEmail = document.querySelector("#reg-email").value.trim();
  const registerPassword = document.querySelector("#register-pass").value.trim();

  if(registerName === "" || registerEmail === "" || registerPassword === "" || confirmPassword.value.trim() === ""){
    alert("Please fill all the fields");
  }

  const userDetails = {
    name : registerName,
    email : registerEmail,
    password : registerPassword
  }

  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  users.push(userDetails)

  localStorage.setItem("users", JSON.stringify(users));

  document.querySelector("#name").value = "";
  document.querySelector("#reg-email").value = "";
  document.querySelector("#register-pass").value = "";
  document.querySelector("#confirm-password").value = "";
})