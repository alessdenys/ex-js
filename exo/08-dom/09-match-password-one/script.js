/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let pass1 = document.getElementById("pass-one");
    console.log(pass1);
    let pass2 = document.getElementById("pass-two");
    console.log(pass2);
    document.getElementById("run").addEventListener("click", () => {
        if (pass1.value === pass2.value){
            console.log("acces granted")
        }
        else{
            function changeColor(){
                Array.from(document.querySelectorAll('input')).map(function(input) {
                           input.style.borderColor="red";
                })
            }
            changeColor()
        }
    });
})();
