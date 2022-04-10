export const levels = {
  1: {
    bugs: {
      bug1: {
        nextSpawnTimestamp: 0,
        maxSpawnInterval: 1500,
        speed: 3.5,
        health: 1,
        width: 50,
        height: 50,
        attackDamage: 1,
        gold: 3,
      },
    },
    mission: {
      killedBugs: 3,
      time: 1 * 60 * 1000,
    },
  },
  2: {
    bugs: {
      bug1: {
        nextSpawnTimestamp: 0,
        maxSpawnInterval: 2000,
        speed: 10,
        health: 1,
        width: 50,
        height: 50,
        attackDamage: 1,
        gold: 3,
      },
    },
    mission: {
      killedBugs: 5,
      time: 1 * 60 * 1000,
    },
  },
};
