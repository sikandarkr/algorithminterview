function diagonalDifference(matrix){


    let primarySum =0;
    let secondarySum =0;

    for(let i=0; i<matrix.length; i++){

        primarySum += matrix[i][i];
        secondarySum += matrix[i][matrix.length-1-i];

    }

    return Math.abs(secondarySum-primarySum);

}
console.log(diagonalDifference([[1,2,4],[1,4,3],[1,2,2]]));