/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here
    var x = 1
    while (x <=100) {
        if (x % 15 == 0){
            console.log("fizzbuzz");
        }
        else if (x % 5 == 0) {
            console.log("buzz");
        }
        else if (x % 3 == 0) {
            console.log("fizz");
        }
        else{
            console.log(x);
        }
        x++;
    }

})();
