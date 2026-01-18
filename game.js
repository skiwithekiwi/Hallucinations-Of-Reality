let night = 1;
const MAX_NIGHTS = 10;

const game = document.getElementById("game");
const menuMusic = document.getElementById("menuMusic");

// START GAME
function startGame() {
  menuMusic.pause();
  showRoom();
}

// TUTORIAL
function showTutorial() {
  game.innerHTML = `
    <h2>Tutorial</h2>
    <p>You are alone in a room.</p>
    <p>Sleeping causes hallucinations.</p>
    <p>Hallucinations change reality.</p>
    <p>Survive 10 nights.</p>
    <button onclick="location.reload()">Back</button>
  `;
}

// ROOM
function showRoom() {
  game.innerHTML = `
    <h2>Night ${night}</h2>
    <p>You are in your room.</p>
    <button onclick="goToSleep()">Go to sleep</button>
  `;
}

// SLEEP
function goToSleep() {
  game.innerHTML = `
    <h2>Sleeping...</h2>
    <p>You close your eyes.</p>
  `;
  setTimeout(hallucinations, 2000);
}

// HALLUCINATIONS
function hallucinations() {
  game.innerHTML = `
    <h2>Hallucinations</h2>
    <p>You can only watch.</p>
  `;
  setTimeout(wakeUp, 4000);
}

// WAKE UP
function wakeUp() {
  game.innerHTML = `
    <h2>You wake up</h2>
    <button onclick="reality()">Prepare</button>
  `;
}

// REALITY
function reality() {
  game.innerHTML = `
    <h2>Reality</h2>
    <p>Survive.</p>
  `;
  setTimeout(endNight, 5000);
}

// END NIGHT
function endNight() {
  if (night >= MAX_NIGHTS) {
    game.innerHTML = `
      <h1>You survived all 10 nights.</h1>
    `;
    return;
  }

  night++;
  game.innerHTML = `
    <h2>Night survived</h2>
    <button onclick="showRoom()">Sleep again</button>
  `;
}
