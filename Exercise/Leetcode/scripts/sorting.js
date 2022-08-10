/**
* Sorting
*/


/*------------Merge Intervals ------------*/
const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];

    for (let interval of intervals) {
        let e1 = result[result.length - 1][1];
        let s2 = interval[0];
        let e2 = interval[1];

        if (e1 >= s2) {
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            result.push(interval);
        }
    }

    return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));


/*-------------Valid Anagram-----------------*/
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let map = {};

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];

        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++
        }
    }
    for (let i = 0; i < t.length; i++) {
        let letter = t[i];

        if (map[letter] === undefined) {
            return false;
        }
        if (map[letter] < 1) {
            return false;
        }
        map[letter]--;
    }

    return true;
}

console.log(isAnagram('anagram', 'nagaram'));


/*-------------Array Partition 1---------------*/
const arrayPairSum = (nums) => {
    let res = 0;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i = i + 2) {
        res += nums[i];
    }
    return res;
}

console.log(arrayPairSum([1,4,3,2]));