/*--------Sorting---------*/

            //Valid Anagram
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

            // Array Partition 1
            const arrayPairSum = (nums) => {
                let res = 0;

                nums.sort((a, b) => a - b);
                for (let i = 0; i < nums.length; i = i + 2) {
                    res += nums[i];
                }
                return res;
            }

            console.log(arrayPairSum([1,4,3,2]));