/**
 * Stack
 */


/*--------------Valid Parenthese------------*/
const isValid = (s) => {
    let stack = [];
    let len = s.length;
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < len; i++) {
        if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
        stack.pop();
        } else {
        stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid("(]"));


/*-------------------Baseball Game-------------------*/
const calPoints = (ops) => {
    stack = [];

    for (op of ops) {
        if (op === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (op === "D") {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === "C") {
            stack.pop()
        } else {
            stack.push(parseInt(op))
        }
    }

    return stack.reduce((a,b) => a + b);
}

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));


/*----------Backspace Compare---------------*/
const backspaceCompare = (S, T) => {
    const getTyped = (input) => {
        const result = [];
        for (let char of input) {
            if (char === "#") {
                result.pop();
            } else {
                result.push(char);
            }
        }
        return result.join();
    }

    return getTyped(S) === getTyped(T);
}

console.log(backspaceCompare("ab##", "c#d#"));