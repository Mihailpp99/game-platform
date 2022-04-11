import { initState } from "./gameState.js";
import { initGameObject } from "./gameObjects.js";
import { startGame } from "./gameEngine.js";
import { levels } from "./levels.js";

export const gameFunctions = (userData, ctx) => {
  let state = initState(levels[ctx.params.level], userData, ctx);
  let game = initGameObject(ctx);
  let currentTimeElement = document.getElementById("time");
  currentTimeElement.textContent = levels[ctx.params.level].mission.time / 1000;

  const availableKeys = ["KeyA", "KeyS", "KeyD", "KeyW", "Space"];
  substratOneSec();
  document.addEventListener("keydown", (e) => {
    if (availableKeys.includes(e.code)) {
      state.keys[e.code] = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (availableKeys.includes(e.code)) {
      state.keys[e.code] = false;
    }
  });

  // Start game
  startGame(state, game);
};

const substratOneSec = () => {
  let currentTimeElement = document.getElementById("time");
  changeTimeContent(currentTimeElement, Number(currentTimeElement.textContent));
};

const changeTimeContent = (el, time) => {
  // change the value of element
  el.textContent = time - 1;
  // after one sec activate substratOneSec
  setTimeout(() => {
    substratOneSec();
  }, 1000);
};
