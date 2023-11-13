var iceBreakerQuestions = ["What is your favorite icecream?", "who do you admire the most?" ,
"who is your favorite celebirty","When you were a child, what did you want to be when you grew up?", "What movie can you watch over and over again?", "If you could only pick three foods to eat for a month, which foods would you choose?"," What’s your favorite childhood board game?"," If you won the lottery, what’s the first thing you would buy?"," How do you keep up with what’s going on in the world?"," Best sandwich ever. What’s on it?"," Camping. Love it or hate it?"," Who is your favorite comedian?"," What is your favorite tech toy — for work or play — that you can’t live without?",
"If you became president today, what’s the first bill you would pass?","If you could time travel, where is the first place you would go?","What are your most commonly used emojis?","Would you rather speak to animals or know other people’s thoughts?", "Would you rather be always cold or always hot?", 
"What do you do to unwind after a long day at work?"]; 
    

function pickQuestion() {
   var randomNumber = Math.floor(Math.random() * iceBreakerQuestions.length);


document.getElementById('clickme').innerHTML=
  iceBreakerQuestions[randomNumber];
};
