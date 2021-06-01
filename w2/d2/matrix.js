  function transpose(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
  
    let crisscross = []
    for (let col = 0; col < cols; col++) {
        crisscross[col] = []
    }
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        crisscross[col][row] = matrix[row][col]
      }
    }
    return crisscross
  }
  
  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }
  
  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));