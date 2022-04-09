import { initState } from "./gameState.js";
import { initGameObject } from "./gameObjects.js";
import { startGame } from "./gameEngine.js";
import { levels } from "./levels.js";

export const gameFunctions = (userData) => {
  let state = initState(levels[1], userData);
  let game = initGameObject(state);

  const availableKeys = ["KeyA", "KeyS", "KeyD", "KeyW", "Space"];

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
