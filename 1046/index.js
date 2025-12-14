// Last Stone Weight

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

function lastStoneWeight(stones) {
  while (stones.length > 1) {
    let max1 = Math.max(...stones);
    stones.splice(stones.indexOf(max1), 1);
    let max2 = Math.max(...stones);
    stones.splice(stones.indexOf(max2), 1);
    if (max1 !== max2) stones.push(Math.abs(max1 - max2));
  }
  return stones[0] || 0;
};