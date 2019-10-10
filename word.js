var Letter = require("./letter.js");

//make a function called "Word"
var Word = function (word) {
    //on "this" instance, create a function that passes word as a parameter
    this.buildWord = function (word) {
        //create an empty array
        var lettersStore = [];
            //make a loop that runs for the length of the word, each time you run it
        for (var i = 0; i < word.length; i++) {
            //create new instance of "Letter" passing the word's index as an argument, store this on currentLetter
            var currentLetter = new Letter(word[i]);
            //push it to the empty created above
            lettersStore.push(currentLetter);
        } // return the array, so we can see the contents
        return lettersStore;
    }
    //Pass the word on the function created above, and assign it to this particulr instance of "letters"
    this.letters = this.buildWord(word);
    //equal the word to this instance of chosenWord (this will turn into RandomWord on the index file)
    this.chosenWord = word;
    
    this.checkGuess = function (guess) {

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].letterGuess(guess);

        }
    }

    this.display = function () {
        var lettersStore = '';
        for (var i = 0; i < this.letters.length; i++) {
            lettersStore += this.letters[i].display();
        }
        return lettersStore;
    }}

module.exports = Word;
