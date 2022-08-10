/**
* Recursion and Memoization
*/


/*--------------Powx-n----------------*/
const pow = (x, n) => {
    function helper(x, n) {
        if (x === 0) return 0;
        if (n === 0) return 1;

        let result = pow(x, Math.floor(n / 2));
        let total = result * result;
        if (n % 2) {
            return x * total;
        } else {
            return total;
        }
    }

    let ans = helper(x, Math.abs(n));
    if (n >= 0) {
        return ans;
    } else {
        return 1 / ans;
    }
    
}

console.log(pow(2, 10));