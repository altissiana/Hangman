// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWordsArr = [
    "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
    "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
    "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
    "what", "all", "were", "we", "when", "your", "can", "said", "there",
    "use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
    "up", "other", "about", "out", "many", "then", "them", "these", "so",
    "some", "her", "would", "make", "like", "him", "into", "time", "has",
    "look", "two", "more", "write", "go", "see", "number", "no", "way",
    "could", "people", "my", "than", "first", "water", "been", "call",
    "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
    "come", "made", "may", "part"
];
var guessable = commonWordsArr.filter(word => word.length >= 3)
var commonWord = guessable[Math.floor(Math.random() * guessable.length)];
console.log(commonWord)
var s;
var count = 0;
var answerArray = [];

document.getElementById('butt').addEventListener('click', letter)

function startUp() {
    for (var i = 0; i < commonWord.length; i++) {
        answerArray[i] = "_";
    }
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}

function letter() {
    var letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (var i = 0; i < commonWord.length; i++) {
            if (commonWord[i] === letter) {
                answerArray[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = "Number of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    if (count == 5) {
        document.getElementById("stat").innerHTML = "You can do it!";
    }
    if (count == 8) {
        document.getElementById("stat").innerHTML = "Game Over!";
        gameOver()
    }
    if (answerArray.indexOf('_') == -1)
        alert('You win!')
}

function gameOver() {
    document.getElementById('butt').removeEventListener('click', letter)
}

function gameOver() {
    alert("Try Again!");
    window.location.reload();
}


