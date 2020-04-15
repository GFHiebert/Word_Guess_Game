console.log("This is kind of working");

var wordList = ["creeper", "obsidian", "enderman", "whither", "testificate"];





document.onkeyup = function (e) {

    var displayGuesses = document.getElementById("guesses-left");
    var guessesLeft = 5;
    displayGuesses.textContent = guessesLeft;
    

    var displayedGuessWord = document.getElementById("word-to-guess");

    //document.write("This is actually linked");

    var wordToGuess = wordList[0];
    console.log("initial wordToGuess = " + wordToGuess);

    var wordToGuess = (wordList[Math.floor(Math.random() * wordList.length)]);
    
    console.log("wordToGuess = " + wordToGuess);

    var letterArray = [];
    var isHiddenArray = [];

    //counts letters in word and turns them to underscores
    
    var blankWord = "_ ";
    for(var i = 0; i < wordToGuess.length - 1; i++) {
        
        blankWord = blankWord + "_ ";
    }

    //adds letters of word to guess into an array
    //adds visibility for each letter
    for(var i = 0; i < wordToGuess.length; i++) {
        letterArray.push(wordToGuess[i]);
        isHiddenArray.push(true);
    }

    console.log(letterArray);
    console.log(isHiddenArray);

    console.log("blankWord = " + blankWord);

    //display underscores for word to guess
    displayedGuessWord.textContent = blankWord;

    var blankOrLetter = function() {

    }

    


    document.onkeyup = function (e) {
        guessedLetter = e.key;
        var hasGuessedLetter = false;
        for (var i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess.charAt(i) == guessedLetter && isHiddenArray[i] == true) {
                isHiddenArray[i] = false;
                hasGuessedLetter = true;
                console.log("You guessed a letter");
                console.log("before null" + blankWord);
                blankWord = " ";
                console.log("after null" + blankWord);
                for(var x = 0; x < wordToGuess.length; x++) {
                    if(isHiddenArray[x] == true) {
                        blankWord = blankWord + "_ ";
                    } else {
                        blankWord = blankWord + (letterArray[x] + " ");
                    }console.log(blankWord);
                    displayedGuessWord.textContent = blankWord;
                }
            }
        }

        //check to see if all letters have been guessed
        var isAllLettersGuessed = true;
        for(var i = 0; i < isHiddenArray.length; i++) {
            if(isHiddenArray[i] == true) {
                isAllLettersGuessed = false;
            }
        }
        if(isAllLettersGuessed == true) {
            document.write("YOU WON");
        }


        if(hasGuessedLetter == false) {
            guessesLeft--;
            displayGuesses.textContent = guessesLeft;
        }
        if(guessesLeft == 0) {
            document.write("YOU LOST");
        }
    }

}