const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();

// -----------------------------FormValidation--------------------------------
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  
  function validateForm() {
    let username = document.forms["myForm"]["name"].value;
    let useremail = document.forms["myForm"]["email"].value;
    let userPhone = document.forms["myForm"]["phno"].value;
    let userAddress = document.forms["myForm"]["address"].value;
    let userOrder = document.forms["myForm"]["orders"].value;
    // error 
    let nameError = document.querySelector('.nameError');
    let emailError = document.querySelector('.emailError');
    let phError = document.querySelector('.phError');
    let addressError = document.querySelector('.addressError');
    let orderError = document.querySelector('.orderError');
   
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ; //Javascript reGex for Email Validation.
    let regPhone = /^\d{10}$/;

    function validateName() {
    if (username == "") {
      nameError.innerHTML = "Name must be filled out";
      return false;
    }
    nameError.innerHTML = " ";
    return true;
    }
    function validateEmail() {
    if (useremail == "") {
      emailError.innerHTML = "Email must be filled out";
      return false;
    }else if (!useremail.match(regEmail)) {
      emailError.innerHTML = "Enter a valid email address";
      return false;
    }
    emailError.innerHTML = " ";
    return true;        
    }
    function validatePhone() {
    if (userPhone == "") {
      phError.innerHTML = "Phone No. must be filled out";
      return false;
    }else if (!userPhone.match(regPhone)) {
      phError.innerHTML ="Enter a valid phone number";
        return false;
    } 
      phError.innerHTML = " ";
      return true;       
    }
    function validateAddress() {
    if (userAddress == "") {
      addressError.innerHTML = "Address must be filled out";
      return false;
    }
      addressError.innerHTML = " ";
      return true;        
    }
    function validateOrder() {
    if (userOrder == "") {
      orderError.innerHTML = "Your order must be filled out";
      return false;
    }
      orderError.innerHTML = " ";
      return true;          
    }

    validateName();
    validateEmail();
    validatePhone();
    validateAddress();
    validateOrder();    
}
  validateForm();

  form.reset();
  e.preventDefault();
})


