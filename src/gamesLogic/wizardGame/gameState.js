export const initState = (bugs) => {
  let startX = Math.floor(Math.random() * 500);
  let startY = Math.floor(Math.random() * 800);

  const state = {
    player: "Pesho",
    gameOver: false,
    level: 1,
    scoreRate: 1,
    killedBugs: 0,
    gold: 0,
    wizard: {
      width: 82,
      height: 100,
      posX: startX,
      posY: startY,
      speed: 8,
    },
    bugs,
    bugStats: {
      width: 50,
      height: 50,
      nextSpawnTimestamp: 0,
      maxSpawnInterval: 1800,
      speed: 8,
    },
    fireball: {
      width: 20,
      height: 20,
      speed: 12,
      nextSpawnTimestamp: 0,
      fireRate: 500,
    },
    keys: {
      KeyA: false,
      KeyS: false,
      KeyD: false,
      KeyW: false,
      Space: false,
    },
  };

  return state;
};
