/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let pass1 = document.getElementById("pass-one")
    pass1.addEventListener("input", () => {
    let check = document.getElementById('validity');
    let num = /\d/g;
    let checkNum = pass1.value.match(num)
    
         if (pass1.value.length >= "8" && checkNum && checkNum.length >= 2) {
        check.innerHTML = "ok";
        console.log(check);
    }
    else {
        console.log("nope");
    }
    });
   
})();
