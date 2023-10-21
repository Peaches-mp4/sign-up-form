const pass = document.getElementById("password");
const passConfirm = document.getElementById("password-confirm");
const passMatch = document.getElementById("pass-match")



function checkPass(e) {
    passConfirm.addEventListener('blur', isSame)
}

function isSame() {
   if (passConfirm.value !== pass.value) {
    passMatch.innerText = "*Passwords don't match";
    pass.classList.add('error');
    passConfirm.classList.add('error');
    }
}

checkPass();

/* 

* spreci pomeranje submit buttona nanize kada iskoci poruka da se ne matchuhu passwordi

*dodaj success class mozda, sa stikliranjem

*limiti za css da se ne bi breakovao design pri resize

 */