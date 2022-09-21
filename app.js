console.log('Getting started');

// let allQuestions = [prompt('What is my favorite Animal?'), prompt('What is my favorite Food?'), prompt('What is my favorite Season?')];

// User clicks button
let button = document.getElementById('start-game');

function game() {

// One question is display to the user
  let Q1 = prompt('What is my favorite Animal?');
  let total = 0;

  if(Q1 === 'Cat'){
    alert('Yay! U got a point');
    total += 1;

  }else{
    alert('Not right :(');
    total -= 1;
  }
  let Q2 = prompt('What is my favorite season?');

  if(Q2 === 'Spring'){
    alert('Woot! Good job :D');
    total += 1;
  }else{
    alert('Um, were you paying attention?');
    total -= 1;
  }

  alert('Thx for playing, ur score is ' + total);


}







button.addEventListener('click', game);


// User gets question right? Add a point

// User gets questions wrong? Subtract a point

// End game when user answers all the questions (right or wrong)

// show User total score 