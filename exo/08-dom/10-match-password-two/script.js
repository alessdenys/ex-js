/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
        if (pass1.value != pass2.value) {
            pass1.innerHTML = "erreur"
            pass2.innerHTML = "erreur" 
        }
        else {
            alert("you win!");
        }
    })

})();




// document.getElementById("run").addEventListener("click", () => {
//         function validation(field) {
//             if (document.getElementById("pass-one").value == '' || document.getElementById("pass-two").value == '') {
//               alert('Tous les champs ne sont pas remplis');
//               }
//             else if (document.getElementById("pass-one").value != document.getElementById("pass-two").value) {
//                 document.getElementById("pass-one").value="error";
//                 document.getElementById("pass-two").value="error";
    
//               }
//             else if (document.getElementById("pass-one").value == document.getElementById("pass-two").value) {
//                 alert("Votre mot de passe a été enregistré !")
//               }
//             else {
    
//               return false;
//               }
//             }
//             validation();
//         });
