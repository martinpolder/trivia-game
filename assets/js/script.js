// Variables & html ref

var qBank = [
    {
        question = "What is your favorite color?",
        a = "Firetruck",
        b = "Velcro",
        c = "Pants",
        d = "Green",
        correctAns = "d",
    },

    {
        question = "Why are you sad?",
        a = "No money",
        b = "Plane crash",
        c = "Dog died",
        d = "Flat feet",
        correctAns = "a",

    },

    {
        question = "Stop tickling me",
        a = "Okay",
        b = "I'm not",
        c = "You're just itchy",
        d = "I'm almost done",
        correctAns = "b",
    },

    {
        question = "I'm out of ideas",
        a = "Me too",
        b = "Think harder",
        c = "I'm tired",
        d = "I'm hungry",
        correctAns = "d",
    },

]




lastQ = questions.length-1;
currentQ = 0;


function askQ() {
    let q = questions[currentQ];
    question.html("<p>" + q.question + "</p>")
    a.html(q.a);
    b.html(q.b);
    c.html(q.c);
    d.html(q.d);
}