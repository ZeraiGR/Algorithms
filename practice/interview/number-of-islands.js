// Number of Islands

/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

const numIslands = function(grid) {
  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let val = grid[row][col];

      if (val === '1') {
        bfs(row, col, grid);
        islands++;
      }
    }
  }

  return islands;
};

function bfs (row, col, grid) {
  
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") {
    return;
  }

  grid[row][col] = "0";

  bfs(row + 1, col, grid);
  bfs(row - 1, col, grid);
  bfs(row, col + 1, grid);
  bfs(row, col - 1, grid);
}

numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);