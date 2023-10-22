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
    passMatch.innerText = "Passwords don't match";
    passMatch.classList.remove('hidden');

    pass.classList.remove('success');
    pass.classList.add('error');

    passConfirm.style.backgroundColor = 'yellow';
    passConfirm.classList.add('error');
    }
}

checkPass();

// functions for invalid inputs

inputs.forEach(input => input.addEventListener('blur', isValid));

function isValid(e) {
    if(e.target.checkValidity() == true) {

        if(e.target.value) {
            e.target.classList.remove('error');
            e.target.classList.add('success');
            e.target.nextElementSibling.classList.add('hidden');
        } else {
            return;
        }

    } else {

        e.target.classList.add('error');
        if(!e.target.value ) {
            e.target.nextElementSibling.classList.remove('hidden');}
        
    }

}

/* 

* spreci pomeranje submit buttona nanize kada iskoci poruka da se ne matchuhu passwordi

*dodaj success class mozda, sa stikliranjem

*limiti za css da se ne bi breakovao design pri resize

 */