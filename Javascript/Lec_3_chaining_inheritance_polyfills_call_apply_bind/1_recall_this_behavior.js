/* this behavior:

1. global scope /GEC : window object (this value)
2. function call:  window object (this value)
3. method call: current object (this value)
4. constructor function: Objects get created via new keyword, 
                        so this refers to newly created object.
5.Event handlers: this refers to the DOM element on which your event occured.
6. arrow function: this can't be bind with arrow function, 
                   this can bind with outerscope of the function.

    IQ: Why this can't bind with arrow function?
*/

const robot = { // object literal
   energyLevel: 100,

   // 1. ${robor.energyLevel}
   checkEnergy: () => {
     console.log(`1. Energy is curently at ${robot.energyLevel}`);
   },

   //2. wrap it up with normal function
   showEnergyLevel: function () {
    const checkEnergy = () => {
        console.log(`2. Energy is curently at ${this.energyLevel}`);
    }
    checkEnergy();
   }
}

robot.showEnergyLevel();

