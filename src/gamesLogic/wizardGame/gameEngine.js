export const startGame = (state, game) => {
  const heroHealthSpanElement = (document.getElementById(
    "heroHealth"
  ).textContent = state.wizard.health);
  window.reqId = undefined;
  game.createWizard(state.wizard);
  setTimeout(() => (state.gameOver = true), state.time);

  window.reqId = window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop(state, game, timestamp) {
  const bugElements = document.querySelectorAll(".bug");
  const fireballElements = document.querySelectorAll(".fireball");
  const killedBugsSpanElement = document.getElementById("killedBugs");
  const goldTakenSpanElement = document.getElementById("goldTaken");
  const heroHealthSpanElement = document.getElementById("heroHealth");
  console.log(timestamp);

  if (window.isPageChanged) {
    console.log("end");
    return;
  }
  moveWizard(state, game);
  const { wizard } = state;
  const { wizardElement } = game;

  // Create fireball

  if (state.keys.Space && state.fireball.nextSpawnTimestamp < timestamp) {
    game.createFireball(wizard, state.fireball);
    state.fireball.nextSpawnTimestamp =
      timestamp + state.fireball.fireballSpawnInterval;
  }

  // Spawn bugs
  if (timestamp > state.bugs["bug1"].nextSpawnTimestamp) {
    game.createBug(state.bugs["bug1"]);
    state.bugs["bug1"].nextSpawnTimestamp =
      timestamp + state.bugs["bug1"].maxSpawnInterval;
  }

  //move Bugs

  bugElements.forEach((bug) => {
    let posX = parseInt(bug.style.left);

    if (detectCollision(wizardElement, bug)) {
      bug.remove();
      state.wizard.health--;
      heroHealthSpanElement.textContent = state.wizard.health;
      if (state.wizard.health <= 0) {
        state.gameOver = true;
      }
    }
    fireballElements.forEach((fireball) => {
      if (detectCollision(bug, fireball)) {
        fireball.remove();
        bug.remove();
        killedBugsSpanElement.textContent =
          Number(killedBugsSpanElement.textContent) + 1;
        goldTakenSpanElement.textContent =
          Number(goldTakenSpanElement.textContent) +
          Number(bug.getAttribute("data-gold"));
      }
    });

    if (posX > 0) {
      bug.style.left = posX - state.bugs["bug1"].speed + "px";
    } else {
      bug.remove();
    }
  });

  // move fireball

  fireballElements.forEach((fireball) => {
    let posX = parseInt(fireball.style.left);
    if (posX < game.gameScreen.offsetWidth) {
      fireball.style.left = posX + state.fireball.fireballSpeed + "px";
    } else {
      fireball.remove();
    }
  });

  wizardElement.style.left = wizard.posX + "px";
  wizardElement.style.top = wizard.posY + "px";

  if (state.gameOver) {
    alert(`Game Over `);
  } else {
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
  }
}

function moveWizard(state, game) {
  let { wizard, keys } = state;

  if (keys.KeyA) {
    wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
  }
  if (keys.KeyS) {
    wizard.posY = Math.min(
      wizard.speed + wizard.posY,
      game.gameScreen.offsetHeight - wizard.height
    );
  }
  if (keys.KeyD) {
    wizard.posX = Math.min(
      wizard.posX + wizard.speed,
      game.gameScreen.offsetWidth - wizard.width
    );
  }
  if (keys.KeyW) {
    wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
  }
}

function detectCollision(objectA, objectB) {
  let first = objectA.getBoundingClientRect();
  let second = objectB.getBoundingClientRect();

  let hasCollision = !(
    first.top > second.bottom ||
    first.bottom < second.top ||
    first.right < second.left ||
    first.left > second.right
  );

  return hasCollision;
}
