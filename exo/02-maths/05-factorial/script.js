/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

        // your code here
        // document.getElementById("run").addEventListener("click", () => {
        //     var numbers = document.getElementById("number").value;
        //     Math.factorial=function (numbers){
        //     if(isNaN(numbers) , numbers < 0 , Math.round(numbers) != numbers){
        //     ('Erreur de valeur : ' + numbers + ' n'est pas un nombre entier positif');
        //     }
        //     return numbers === 0 ? 1 : numbers * this.factorial(numbers - 1);
        //     }
            
        //         document.getElementById("number").value = Math.factorial(numbers);
        //     });
        document.getElementById("run").addEventListener("click", () => {
            let check = document.getElementById("number").value;
            const fact = (n) => {
                if(n == 0){
                    return 1;
                }
                else {
                    // si le nombre n'est pas strictement egal à 0, on recommence
                    return n*fact(n-1);
                }
            }
            console.log(fact(check));
        });
        })();