/**
 * Array
*/


/*--------Two Sum-------- */
const twoSum = (nums, target) => {
    let cache = {}
    for (num in nums) {
        let num2 = target - nums[num];
        if (num2 in cache) {
            return [num, cache[num2]]
        }
        cache[nums[num]] = num;
    }
};

console.log(twoSum([3,2,4], 6));


/*----------Number of Island---------*/
// convert stuff around us to water
const teraform = (rowIn, colIn, grid) => {
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') {
        return;
    }
    grid[rowIn][colIn] = '0';
    teraform(rowIn+1, colIn, grid);
    teraform(rowIn-1, colIn+1, grid);
    teraform(rowIn, colIn+1, grid);
    teraform(rowIn, colIn-1, grid);
}

const numIsland = (grid) => {
    let countIslands = 0;
    for (let rowIndex in grid) {
        for (let colIndex in grid[rowIndex]) {
            if (grid[rowIndex][colIndex] === '1') {
                countIslands++;
                teraform(parseInt(rowIndex), parseInt(colIndex), grid);
            }
        }
    }
    return countIslands;
};

console.log(numIsland([['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]));


/*-------Transpose Matrix-----------*/
const transpose = (matrix) => {
    const result = new Array(matrix[0].length).fill(0).map(() => new Array(matrix.length));

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            result[c][r] = matrix[r][c];
        }
    }
    return result;
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));


/*-----------Sort Array By Parity----------*/
const sortArrayByParity = (A) => {
    let leftIndex = 0;
    let rightIndex = A.length - 1;

    while (leftIndex < rightIndex) {
        while(A[leftIndex] % 2 === 0 && leftIndex < rightIndex) {
            leftIndex += 1;
        }

        while(A[rightIndex] % 2 !== 0 && leftIndex < rightIndex) {
            rightIndex -= 1;
        }

        if (leftIndex < rightIndex) {
            const temp = A [leftIndex];
            A[leftIndex] = A[rightIndex];
            A[rightIndex] = temp;
            leftIndex += 1;
            rightIndex -= 1;
        }
    }

    return A;
}

console.log(sortArrayByParity([3,1,2,4]));


/*-------Flipping an Image-----------*/
const flipAndIvertImage = (A) => {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i].reverse().map(cell => cell === 1 ? 0 : 1)
    }

    return A;
}

console.log(flipAndIvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))