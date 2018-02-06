var randomWordArr = [
  "ride",
  "western",
  "saddle",
  "horse",
  "rustle",
  "galllows",
  "spurs",
  "colt",
  "noose"
];

var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)
];

var s;

var count = 0;

var answerArray = [];

function startUp() 
{
  for (var i = 0; i < randomWord.length; i++) 
  {
    answerArray[i] = "_";
  }

  s = answerArray.join(" ");
  $("#answer").html(s);
}

function letter() {
// Im working on transfering these to jquery functions.
  var letter = $("#letter").value(this.key);
  // document.getElementById("letter").value;

  if (letter.length > 0) 
  {
    for (var i = 0; i < randomWord.length; i++) 
    {
      if (randomWord[i] === letter) 
      {
        answerArray[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "Number of clicks" + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if (count > 5) {
    document.getElementById("stat").innerHTML = "Try Harder";
  }
}
