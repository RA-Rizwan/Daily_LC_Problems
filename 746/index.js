// Min Cost Climbing Stairs

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

function minCostClimbingStairs(cost) {
  const n = cost.length;
  let dp = 0,
    dp1 = 0,
    dp2 = 0;
  for (let i = 2; i <= n; i++) {
    const oneStep = dp1 + cost[i - 1];
    const twoStep = dp2 + cost[i - 2];
    dp = Math.min(oneStep, twoStep);
    dp2 = dp1;
    dp1 = dp;
  }
  return dp1;
};