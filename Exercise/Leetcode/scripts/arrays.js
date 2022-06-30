/*--------Array--------------*/

            // Two Sum
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