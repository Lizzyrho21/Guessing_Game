
let songButton = document.getElementById('song-button');
let mainContent = document.getElementById('main-content');

let mySongs = [
  {
    id:1,
    "Title": "Bad Habit",

  },
  {
    id:2,
    "Title": "Flawless",

  },
  {
    id:3,
    "Title": "On Tha Line",

  }
];

function allSongs(){
  // Use for loop instead of map 
//   mySongs.map(song => {
//     let h1 = document.createElement("h1");
//     h1.append(song.Title);
//     let button = document.createElement("button");
//     button.innerHTML = 'Play song';
//     mainContent.append(h1, button);
//   }
//   );

  for(let i = 0; i < mySongs.length; i++) {
    let h1 = document.createElement('h1');
    h1.append(mySongs[i].Title);
    let button = document.createElement('button');
    button.innerHTML = 'Play song';
    mainContent.append(h1, button);
  }
}

songButton.addEventListener('click', allSongs);


// Guessing game with playlist