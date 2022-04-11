export const initState = (level, userData, ctx) => {
  let startX = Math.floor(Math.random() * 200);
  let startY = Math.floor(Math.random() * 800);

  let { bugs, mission } = level;

  // modify the bugs according to the level
  Object.entries(bugs).forEach((bug) => {
    if (bug[1].healthCanBeChanged) {
      bugs[bug[0]].health = Number(
        Math.floor(bugs[bug[0]].health + Number(ctx.params.level) * 0.25)
      );
    }
    if (bug[1].speedCanBeChanged) {
      bugs[bug[0]].speed = Number(
        bugs[bug[0]].speed + Number(ctx.params.level) * 0.3
      );
    }
    if (bug[1].maxSpawnIntervalCanBeChanged) {
      bugs[bug[0]].maxSpawnInterval = Number(
        Math.max(
          bugs[bug[0]].maxSpawnInterval - Number(ctx.params.level) * 100,
          500
        )
      );
    }
  });

  const state = {
    player: "Pesho",
    gameOver: false,
    level: Number(ctx.params.level),
    userData,
    time: mission.time,
    isTimeOver: false,
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
