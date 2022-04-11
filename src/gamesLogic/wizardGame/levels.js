// attack damage will be const for one type of bugs
// health of a bug will be calculated:   Match.floor(1 + level * 0.5)
// speed of a bug will be calculated: Match.floor( 2.5 + level *0.2)
import { bugTypes } from "./bugs.js";

export const levels = {
  1: {
    bugs: {
      bug1: bugTypes.bug1,
    },
    mission: {
      killedBugs: 3,
      time: 1 * 60 * 1000,
    },
  },
  2: {
    bugs: {
      bug1: bugTypes.bug1,
    },
    mission: {
      killedBugs: 5,
      time: 1 * 60 * 1000,
    },
  },
};
