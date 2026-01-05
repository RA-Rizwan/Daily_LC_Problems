/**
 Maximum Matrix Sum

 You are given an n x n integer matrix. You can do the following operation any number of times:

Choose any two adjacent elements of matrix and multiply each of them by -1.
Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.
 */

var maxMatrixSum = function (matrix) {
    let sum = 0;
    let minAbs = Infinity;
    let negCount = 0;

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix.length; j++){
            if (matrix[i][j] < 0) {
                sum = sum + Math.abs(matrix[i][j])
                minAbs = Math.min(minAbs, Math.abs(matrix[i][j]))
                negCount++
            }else{ sum+=matrix[i][j]}
        }
    }
    return negCount%2===0?sum:sum-2*minAbs
}

/**
  Time complexity : o(n²)
  Space complexity : o(1)
 */
