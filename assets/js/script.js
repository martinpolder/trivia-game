// start with an opening screen with a click event to start the Game
function(click)

// have an array with all the questions and answers run through a for loop

// question array
var qBank = [
   
//    question 1
    {
        question: "Chicken cross road?",
        answers: {
            a: "Who is this",
            b: "Hmmmm",
            c: "No.",
            d: "Maybe",
        },
        correctAns: "c"
    },

    // question 2
    {
        question: "Why charlie hate?",
        answers: {
            a: "mean man",
            b: "bastard man",
            c: "dumb man",
            d: "loud man",
        },
        correctAns: "b"
    },

]

// each answer is a clickable button that triggers the next screen

// make the question appear for 30 seconds at a time

// if user answer is correct, inform them for 5sec before auto loading the next question, store as correct answer

// if user answer is incorrect, inform them, and show right answer for 5sec and auto load next question, store as incorrect answer

// if user runs out of time, display an out of time message, show them the correct answer and load the next question
//         store as an unanswered question


// when loop finishes, display the correct, incorrect, and unanswered values and a button to start the game over