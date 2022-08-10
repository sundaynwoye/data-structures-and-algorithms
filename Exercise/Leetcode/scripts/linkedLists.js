/**
* Linked lists
*/


/*----------Add Two Numbers------------*/
const addTwoNumbers = (l1, l2) => {
    let head = new ListNode(0);
    let node = head;
    let carry = 0;
    while (l1 || l2) {
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        let sum = l1Value + l2Value + carry;
        carry = 0;
        let newValue = sum;

        if (sum > 9) {
            newValue = sum % 10;
            carry = 1;
        }

        node.next = new ListNode(newValue);
        node = node.next;
        
        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry) {
        node.next = new ListNode(carry);
    }

    return head.next;
}


/*------------Reverse Linked List-----------*/
function reverseList(head) {
    let prev = null;
    let next = null;

    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}


/*----------------Reverse Linked List------------*/
const reverseBetween = (head, m, n) => {
    //create dummy
    const dummy = {next: head};
    // create pre
    let pre = dummy;
    for (let i = 0; i < m -1; ++i) {
        pre = pre.next;
    }
    // reverse
    let cur = pre.next;
    for (let i = 0; i < n - m; ++i) {
        let NEXT = cur.next;
        cur.next = NEXT.next;
        NEXT.next = pre.next;
        pre.next = NEXT;
    }
    return dummy.next;
}


/*------------Intersection of Two Linked Lists ------------*/
const getIntersectionNode = (headA, headB) => {
    if (headA === null || headB === null) {
        return null;
    }

    let pointer1 = headA;
    let pointer2 = headB;

    while ( pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;

        if (pointer1 === pointer2) {
            return pointer1;
        }

        if (pointer1 === null) {
            pointer1 = headB;
        }

        if (pointer2 === null) {
            pointer2 = headA;
        }
    }

    return pointer1;
}


/*------------Odd Even Linked List--------------*/
const oddEvenList = (head) => {
    if (!head || !head.next) return head;

    let oddList = new ListNode(-1);
    let evenList = new ListNode(-1);
    let oddStart = oddList;
    let evenStart = evenList;
    let placeValue = 1;
    let current = head;

    while (current !== null) {
        if (placeValue % 2 === 1) {
            oddList.next = current;
            oddList = oddList.next;
        } else {
            evenList.next = current;
            evenList = evenList.next;
        }

        placeValue++;
        current = current.next;
    }

    oddList.next = evenStart.next;
    evenList.next = null;

    return oddStart.next;
}