function rotateMatrix90(matrix){
     
    let newMatrix = [];

    for(let i=0; i<matrix.length; i++){
        for(let j=i+1; j<matrix.length; j++){
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp
        }
    }

    for(let i =0; i<matrix.length; i++){
        let start = 0;
        let end = matrix.length-1;
        while(start<end){

            let temp = matrix[i][start];

            matrix[i][start] = matrix[i][end];

            matrix[i][end] = temp;
            start++;
            end--;
        }

    }
    return matrix;
}

let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];


console.log(rotateMatrix90(input));