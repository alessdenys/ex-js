/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // variables
    // var rouge = document.getElementById("red").value;
    // document.body.style.backgroundColor = 'pink';
    // var vert = document.getElementById("green").value
    // var jaune = document.getElementById("yellow").value
    // var bleu = document.getElementById("blue").value
    //boutton
    (() => {
        // your code here
        document.getElementById("red").addEventListener("click", () => {
            document.body.style.backgroundColor = "red";
            });
        document.getElementById("green").addEventListener("click", () => {
            document.body.style.backgroundColor = "green";
            });
        document.getElementById("yellow").addEventListener("click", () => {
            document.body.style.backgroundColor = "yellow";
            });
            document.getElementById("blue").addEventListener("click", () => {
            document.body.style.backgroundColor = "blue";
            });
        })();