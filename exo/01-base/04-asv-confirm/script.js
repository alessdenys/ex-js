/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var age = prompt("quel age à tu?")
    var sexe = prompt("est tu un homme ou ne femme?")
    var ville = prompt("d'ou viens tu? (ville)")
    var confirmation = [age, sexe, ville]

    if ( confirm("Ces information sont-elles correct? " + 
    confirmation)){
        alert("bienvenu Billy")
    }else{
        location.href = "file:///home/becode/Bureau/Becode_project/coline/JS/CRL-Woods-2.15/Parcours/02-Colline/11-Javascript/exercises/01-base/04-asv-confirm/index.html"
    }
})();
