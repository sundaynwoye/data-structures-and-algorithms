/**
* Hashmaps and sets
*/


/*------------Group Anagrams-----------*/
const groupAnagrams = (strs) => {
    let obj = {}

    for(let i of strs) {
        let key = i.split('').sort().join('');

        if(!obj[key]) {
            obj[key] = [i];
        } else {
            obj[key].push(i);
        }
    }
    return Object.values(obj)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


/*--------Longest Substring Without Repeating Characters---------*/
const lengthOfLongestSubstring = (s) => {
    let max = 0;
    let begin = 0;
    let map = {};

    for (let end = 0; end < s.length; end++) {
        if (map[s[end]] !== undefined && map[s[end]] >= begin) {
            begin = map[s[end]] + 1;
        }
        map[s[end]] = end;
        max = Math.max(max, end - begin + 1);
    }

    return max;
}

console.log(lengthOfLongestSubstring("pwwkew"));


/*--------Jewels and Stones---------*/
const numJewelsInStones = (J, S) => {
    let count = 0;
    const jewelsHT = {};

    for (const jewel of J) {
        jewelsHT[jewel] = true;
    }

    for (const stone of S) {
        if (stone in jewelsHT) {
            count += 1;
        }
    }

    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbbbb"));


/*-------------Happy Number----------------*/
const getNumSum = num => {
    let total = 0;

    while (num !== 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        total += Math.pow(lastDigit, 2);
    }

    return total;
}

const isHappy = (n) => {
    let fast = n;
    let slow = n;

    while (true) {
        fast = getNumSum(getNumSum(fast));
        slow = getNumSum(slow);

        if (fast === slow) {
            return fast === 1;
        }
    }
}

console.log(isHappy(19));


/*-------Intersection of Two Arrays----------*/
const intersection = (nums1, nums2) => {
    let firstSet = new Set();

    for (let num of nums1) {
        firstSet.add(num);
    }

    let intersectionSet = new Set();

    for (let num of nums2) {
        if (firstSet.has(num)) {
            intersectionSet.add(num);
        }
    }

    return Array.from(intersectionSet);
}

console.log(intersection([1,2,2,1], [2,2]));