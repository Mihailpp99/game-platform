export const initState = (level, userData) => {
  let startX = Math.floor(Math.random() * 200);
  let startY = Math.floor(Math.random() * 800);

  let { bugs, mission } = level;

  const state = {
    player: "Pesho",
    gameOver: false,
    level: 1,

    time: mission.time,
    mustKillBugs: mission.killedBugs,
    killedBugs: 0,
    gold: 0,
    wizard: {
      width: 82,
      height: 100,
      posX: 200,
      posY: 300,
      speed: userData.heroSpeed,
      health: userData.heroHealth,
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
      fireballSpeed: userData.fireballSpeed,
      nextSpawnTimestamp: 0,
      fireballSpawnInterval: userData.fireballSpawnInterval,
      fireballDamage: userData.fireballDamage,
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
