// variables

const pass = document.getElementById("password");
const passConfirm = document.getElementById("password-confirm");
const passMatch = document.getElementById("pass-match")
const inputs = document.querySelectorAll("input");
// const required = document.getElementsByClassName('required');

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
            e.target.previousElementSibling.children[0].classList.remove('hidden');

            if(e.target.nextElementSibling.classList.contains('required')) {
                e.target.nextElementSibling.classList.add('hidden');
            }
        } else {
            e.target.classList.remove('success');
        }

    } else {

        e.target.classList.add('error');
        e.target.classList.remove('success');


        if(!e.target.value ) {
            e.target.nextElementSibling.classList.remove('hidden');
            e.target.nextElementSibling.classList.add('warning')};
        
    }

}

/* 

*"this field is optional" poruka je malo ugly:
1) povecati razmak izmedju fields

2) ostaviti prazne p umesto poruke jer je potrebno da postoji neki element zbog drugog dela koda

3) promeniti logiku tako da se u kodu ne dodaje hidden clas next sibling elementu ako je e.target an optional field

4) aria-describedby?

5) a da samo stavim req i optional odmah pored input labels? umesto ispod?

*dodati validaciju za username i phone number - mozda se za to mogu iskoristiti this field is optional paragrafi? za poruke tipa 'pls username duzi od 2 slova' itd

*pass confirmation: 
    1) ne uspevam da dodam error class i sklonim success class sa Confirm password inputa kada funkcija skonta da passes don't match; sa druge strane mogu da menjam style etc, tako da izgleda da je targetovan element kako treba

    2) ako dodam slovo viska inputu za password confirmation (pass1 = ar, pass2 = arr) okidanje errora radi kako treba. medjutim kada obrisem i ponovo iskucam pass confirmation, ovaj put da matchuje originalni password, ne revalidetuje se matching, ostaju mi primenjene error classes


*limiti za css da se ne bi breakovao design pri resize

 */