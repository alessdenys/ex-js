/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let pass1 = document.getElementById("pass-one");
    let length = pass1.maxLength = "10";
    console.log(length);
    let counter = document.getElementById("counter");
   pass1.addEventListener("input", () => {
       counter.innerHTML = pass1.value.length + "/10"
   });
})();
