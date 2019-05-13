/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. calling this in the global scope you the window/console object or 'the whole code'
* 2. implicit binding, in a function called with a dot preceding 'this' refers to the object to the left of the dot 
* 3. whenever we use a constructor function, 'this' refers to the object that the function is returning
* 4. using .call .apply or .bond can tell .this exactly what to bind to
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function say(name){
    //console.log(this);
}
say('ricardio');

// Principle 2
// code example for Implicit Binding
const anObj = {
    ficAnimal : 'sneef',
    getAnimal : function (existence){
        //console.log(this.ficAnimal +  " " + existence);
    }
}

anObj.getAnimal('is fictional');

// Principle 3
// code example for New Binding
function ships(kind){
    this.phrase = 'look a ';
    this.end = ' ship';
    this.kind = kind;
    this.exclaim = function(){
        console.log(this.phrase + this.kind + this.end);
    }
}

const float = new ships('regular');
const fly = new ships('space');
float.exclaim();
fly.exclaim();

// Principle 4
// code example for Explicit Binding
function dog(name){
    this.word = "good doggy, "
    this.name = name;
    this.good = function(){
        console.log(this.word + this.name);
    }
}
const dog1 = new dog('whistle');
const dog2 = new dog('randy');

dog1.good();
dog1.good.call(dog2);