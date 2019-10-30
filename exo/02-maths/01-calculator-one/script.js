/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        var plus = parseFloat(document.getElementById("op-one").value) + parseFloat(document.getElementById("op-two").value);
        alert(plus);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var moins = parseFloat(document.getElementById("op-one").value) - parseFloat(document.getElementById("op-two").value);
        alert(moins)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var multip = parseFloat(document.getElementById("op-one").value) * parseFloat(document.getElementById("op-two").value);
        alert(multip)
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var divide = parseFloat(document.getElementById("op-one").value) / parseFloat(document.getElementById("op-two").value);
        alert(divide)
    });
})();
