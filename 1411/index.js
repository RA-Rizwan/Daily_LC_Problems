/**
 * * Number of Ways to Paint N × 3 Grid
 * 
 *  You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).
 
* Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.
 */

var numOfWays = function (n) {
  const MOD = 1e9 + 7;

  let same = 6;
  let diff = 6;

  for (let i = 2; i <= n; i++) {
    const newSame = (same * 3 + diff * 2) % MOD;
    const newDiff = (same * 2 + diff * 2) % MOD;

    same = newSame;
    diff = newDiff;
  }

  return (same + diff) % MOD;
};

/**
 * time complexity : o(N)
 * space complexity : o(1)
 */