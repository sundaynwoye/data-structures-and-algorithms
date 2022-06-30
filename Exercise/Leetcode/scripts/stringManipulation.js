/*-------String Manipulation-----*/

            // Reverse String
            const reverseString = (s) => {
                return s.reverse();
            };

            console.log(reverseString(["h","e","l","l","o"]));

            // Valid Palindrome
            const isPalindrome = (s) => {
                let cleanStr = cleanUp(s);

                return isPal(cleanStr);
            }
            
            function cleanUp(str) {
                let char = "abcdefghijklmnopqrstuvwxyz0123456789";

                let newStr = '';

                for (let i = 0; i < str.length; i++) {
                    let lCase = str[i].toLowerCase();

                    if (char.indexOf(lCase) !== -1) {
                        newStr += lCase;
                    }
                }
                return newStr;
            }

            function isPal(str) {
                let left = 0;
                let right = str.length - 1;

                while (left < right) {
                    if (str[left] !== str[right]) {
                        return false;
                    }
                    left++;
                    right--;
                }
                return true
            }

            console.log(isPalindrome("A man, a plan, a canal: panama"));