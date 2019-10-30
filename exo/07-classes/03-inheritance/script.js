/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat {
        constructor(name, greeting) {
            this.name = name;

        }
        static greeting = "niah";
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }   
    class Dog {
        constructor(name, greeting) {
            this.name = name;
        }
        static greeting = "Wouf";
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let kitty = new Cat("kitty");
        let puppy = new Dog("puppy")
        console.log(kitty.sayHello());
        console.log(puppy.sayHello());
    }); 
})();
