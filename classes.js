// **Classes Challenge**:

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.

// NOTES:
// when creating a Class - must have a CONSTRUCTOR function within it to initiate the class

// Part 1 of exercise:
class Player {

    // create constructor function

    constructor(name, country) {

            // initiate class using this.
            this.name = name;
            this.country = country;
        }
        // function to run
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);

    }
}
// create new instance of the Class to initialize
const soccerPlayer = new Player('Messi', 'Argentina');

// run class function
soccerPlayer.introduce();

// Part 2 of exercise - creating the subClass

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country) /*super keyword refers to constructor class from which we extending - inheriting*/
        this.age = age;
    }
    playTennis() {
        console.log(`${this.name} is ${this.age} and knows how to play Tennis`);
    }

}

const tennisPlayer = new TennisPlayer('Roger Federer', 'Spain', 38);

tennisPlayer.introduce();
tennisPlayer.playTennis();