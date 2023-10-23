// variables


const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");
const passMatch = document.getElementById("pass-match")
const passwords = Array.from(document.querySelectorAll("input[type='password']"));


// signaling valid/invalid for non-pass inputs

inputs.forEach(input => input.addEventListener('blur', isValid));

function isValid(e) {
  
    if(e.target.checkValidity() == true) {

        if(e.target.value) {
            e.target.classList.remove('error');
            e.target.classList.add('success');
            e.target.previousElementSibling.children[0].classList.remove('hidden');

        } else {
            e.target.classList.remove('success');
            e.target.previousElementSibling.children[0].classList.add('hidden');
        }

    } else {

        e.target.classList.add('error');
        e.target.classList.remove('success');
        e.target.previousElementSibling.children[0].classList.add('hidden');
    }
}

//signaling required

document.querySelectorAll('input').forEach(input => input.addEventListener('blur', isRequired));

function isRequired(e) {
    if(!e.target.value && e.target.checkValidity() == false) {
        e.target.nextElementSibling.classList.remove('hidden');
        e.target.nextElementSibling.classList.add('warning');
        e.target.classList.add('error');
    } else if (e.target.value && e.target.nextElementSibling.classList.contains('required')) {
        e.target.nextElementSibling.classList.add('hidden');
    }
}

// pass validation

passwords.forEach(pass => pass.addEventListener('keyup', isSame))

function isSame(e) {

     if (passwords[0].value == passwords[1].value) {
     passMatch.classList.add('hidden');

     passwords.forEach(pass => pass.classList.add('success'));  
     passwords.forEach(pass => pass.classList.remove('error'));   
     passwords.forEach(pass => pass.previousElementSibling.children[0].classList.remove('hidden'))
    
    } else {

     passMatch.innerText = "Passwords don't match";
     passMatch.classList.remove('hidden');
     passMatch.classList.add('warning');

     passwords.forEach(pass => pass.classList.remove('success'));
     passwords.forEach(pass => pass.classList.add('error'));
     passwords.forEach(pass => pass.previousElementSibling.children[0].classList.add('hidden'));
    }
 }


/* 

*aria-describedby?

*dodati validaciju za username i phone number - mozda se za to mogu iskoristiti this field is optional paragrafi? za poruke tipa 'pls username duzi od 2 slova' itd

*limiti za css da se ne bi breakovao design pri resize

*raspored fields pri resize

 */