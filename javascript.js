// variables

const pass = document.getElementById("password");
const passConfirm = document.getElementById("password-confirm");
const passMatch = document.getElementById("pass-match")
const inputs = document.querySelectorAll("input");
const required = document.getElementsByClassName('required');

// functions for pass validation

function checkPass(e) {
    passConfirm.addEventListener('blur', isSame)
}

function isSame() {
   if (passConfirm.value !== pass.value) {
    // passMatch.innerText = "*Passwords don't match";
    passMatch.classList.remove('hidden');
    pass.classList.add('error');
    passConfirm.classList.add('error');
    }
}

checkPass();

// functions for invalid inputs

inputs.forEach(input => input.addEventListener('blur', setInvalid));

function setInvalid(e) {
    if(e.target.checkValidity() == false) {
        e.target.classList.add('error');}
    if(!e.target.value ) {
        // Array.from(required).forEach(item => item.classList.remove('hidden'));
        let precise = e.target.nextElementSibling;
        precise.classList.remove('hidden');
    }
}

/* 

* spreci pomeranje submit buttona nanize kada iskoci poruka da se ne matchuhu passwordi

*dodaj success class mozda, sa stikliranjem

*limiti za css da se ne bi breakovao design pri resize

 */