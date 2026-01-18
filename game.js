let night = 1;
const MAX_NIGHTS = 10;

let state = "awake"; 
// awake → sleeping → hallucinating → reality

const status = document.getElementById("status");
const view = document.getElementById("view");
const actions = document.getElementById("actions");

render();

// MAIN RENDER
function render() {
  status.innerHTML = `Night ${night}`;
  view.className = "";
  actions.innerHTML = "";

  if (state === "awake") {
    view.innerHTML = `
      You are sitting at your desk.<br>
      A dark room surrounds you.<br>
      The computer hums quietly behind you.
    `;
    actions.innerHTML = `
      <button onclick="sleep()">Go to sleep</button>
    `;
  }

  if (state === "sleeping") {
    view.innerHTML = `
      You lie down.<br>
      Darkness presses against your eyes.
    `;
  }

  if (state === "hallucinating") {
    view.classList.add("hallucinating");
    view.innerHTML = `
      You wake up.<br>
      The room looks wrong.<br>
      Something is watching you.
    `;
    actions.innerHTML = `
      <button onclick="sleep()">Go to sleep</button>
    `;
  }

  if (state === "reality") {
    view.innerHTML = `
      You are awake.<br>
      The hallucinations are becoming real.
    `;
  }
}

// GO TO SLEEP
function sleep() {
  state = "sleeping";
  render();

  setTimeout(() => {
    if (state === "sleeping") {
      state = state === "sleeping" && night > 0 ? "hallucinating" : "hallucinating";
      render();

      setTimeout(() => {
        state = "reality";
        render();

        setTimeout(endNight, 5000);
      }, 4000);
    }
  }, 2000);
}

// END NIGHT
function endNight() {
  if (night >= MAX_NIGHTS) {
    view.innerHTML = `
      You survived all 10 nights.<br>
      Reality has collapsed.
    `;
    actions.innerHTML = "";
    return;
  }

  night++;
  state = "awake";
  render();
}
