/*---------Queues--------*/

            // First unique character in a string
            const firstUniqChar = (s) => {
                let occurance = {};
                for (let i = 0; i < s.length; i++) {
                    if (!occurance[s[i]]) {
                        occurance[s[i]] = 1;
                    } else {
                        occurance[s[i]] += 1;
                    }
                }

                for (let i = 0; i < s.length; i++) {
                    let value = occurance[s[i]];
                    if (value === 1) {
                        return i;
                    }
                }
                return -1;
            }

            console.log(firstUniqChar("leetcode"));

            // Rotate Array
            const rotate = (nums, k) => {
                while (k > 0) {
                    let last = nums.pop();
                    nums.unshift(last);
                    k--;
                }
                return nums;
            }

            console.log(rotate([1,2,3,4,5,6,7], 3));