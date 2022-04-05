import { initState } from "./gameState.js";
import { initGameObject } from "./gameObjects.js";
import { startGame } from "./gameEngine.js";

export const gameFunctions = () => {
  let state = initState();
  let game = initGameObject(state);

  const availableKeys = ["KeyA", "KeyS", "KeyD", "KeyW", "Space"];

  document.addEventListener("keydown", (e) => {
    if (availableKeys.includes(e.code)) {
      console.log(e);
      console.log(e.code);
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
