/**
 * What is chaining?
 * 
 *   - Problem stmt: ladder
 *      // ladder.up();
        // ladder.up();
        // ladder.up();
        // ladder.down();
        // ladder.showStep();
 *     
 *   - To call multiple methods on a object in a single line expression.
 * 
 */

const ladder = {
   step: 0,
   up() {
    this.step++;
    return this;
   },
   down() {
    this.step--;
    return this;
   },

   showStep() {
     console.log(`This is the no. of steps: ${this.step}`);
   }
}

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();


const person = {
    name: 'Ashwani',
    showName(){
        return this.name;
    }
}

const greetMsg = 'Hello, ';

const str = person.showName().toUpperCase() + '!';

console.log(greetMsg.concat(str));

