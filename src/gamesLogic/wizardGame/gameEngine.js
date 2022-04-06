export const startGame = (state, game) => {
  game.createWizard(state.wizard);

  window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop(state, game, timestamp) {
  if (window.isPageChanged) {
    console.log("end");
    return;
  }
  moveWizard(state, game);
  const { wizard } = state;
  const { wizardElement } = game;

  // Create fireball

  if (state.keys.Space) {
    game.createFireball(wizard, state.fireball);
  }

  // Spawn bugs
  if (timestamp > state.bugStats.nextSpawnTimestamp) {
    game.createBug(state.bugStats);
    state.bugStats.nextSpawnTimestamp =
      timestamp + state.bugStats.maxSpawnInterval;
  }

  //move Bugs

  const bugElements = document.querySelectorAll(".bug");

  bugElements.forEach((bug) => {
    let posX = parseInt(bug.style.left);

    if (detectCollision(wizardElement, bug)) {
      state.gameOver = true;
    }

    if (posX > 0) {
      bug.style.left = posX - state.bugStats.speed + "px";
    } else {
      bug.remove();
    }
  });

  // move fireball
  const fireballElements = document.querySelectorAll(".fireball");
  fireballElements.forEach((fireball) => {
    let posX = parseInt(fireball.style.left);
    console.log(posX);
    console.log(game.gameScreen.offsetWidth);
    if (posX < game.gameScreen.offsetWidth) {
      fireball.style.left = posX + state.fireball.speed + "px";
    } else {
      fireball.remove();
    }
  });

  wizardElement.style.left = wizard.posX + "px";
  wizardElement.style.top = wizard.posY + "px";

  if (state.gameOver) {
    alert(`Game Over `);
  } else {
    state.score += state.scoreRate;
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

function start(state, game) {
  game.createWizard(state.wizard);

  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop2(state, game, timestamp) {
  const { wizard } = state;
  const { wizardElement } = game;

  game.scoreScreen.textContent = `${state.score} pts.`;

  modifyWizardPosition2(state, game);

  if (state.keys.Space) {
    game.wizardElement.style.backgroundImage =
      'url("/src/images/wizard-fire.png")';

    if (timestamp > state.fireball.nextSpawnTimestamp) {
      game.createFireball(wizard, state.fireball);
      state.fireball.nextSpawnTimestamp = timestamp + state.fireball.fireRate;
    }
  } else {
    game.wizardElement.style.backgroundImage = 'url("/src/images/wizard.png")';
  }

  // Spawn bugs
  if (timestamp > state.bugStats.nextSpawnTimestamp) {
    game.createBug(state.bugStats);
    state.bugStats.nextSpawnTimestamp =
      timestamp + Math.random() * state.bugStats.maxSpawnInterval;
  }

  // Render bugs
  let bugElements = document.querySelectorAll(".bug");
  bugElements.forEach((bug) => {
    let posX = parseInt(bug.style.left);

    // Detect collsion with wizard
    if (detectCollision(wizardElement, bug)) {
      state.gameOver = true;
    }

    if (posX > 0) {
      bug.style.left = posX - state.bugStats.speed + "px";
    } else {
      bug.remove();
    }
  });

  // Render fireballs
  document.querySelectorAll(".fireball").forEach((fireball) => {
    let posX = parseInt(fireball.style.left);

    // Detect collision
    bugElements.forEach((bug) => {
      if (detectCollision(bug, fireball)) {
        state.score += state.killScore;
        bug.remove();
        fireball.remove();
      }
    });

    if (posX > game.gameScreen.offsetWidth) {
      fireball.remove();
    } else {
      fireball.style.left = posX + state.fireball.speed + "px";
    }
  });

  // Render wizard
  wizardElement.style.left = wizard.posX + "px";
  wizardElement.style.top = wizard.posY + "px";

  if (state.gameOver) {
    alert(`Game Over - You had ${state.score} pts.`);
  } else {
    state.score += state.scoreRate;
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
  }
}