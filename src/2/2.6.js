import Node from '../structures/LinkedList'

export const isPalindrome = list => {
  let data = {}
  let head = list
  let oddCount = 0
  while(head !== null) {
    if (data.hasOwnProperty(head.data)) {
      data[head.data] += 1
      if (data[head.data] % 2 === 0) {
        oddCount -= 1
      }
    } else {
      data[head.data] = 1
      oddCount += 1
    }
    head = head.next
  }
  if (oddCount > 1) return false
  return true
}
































// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     return this;
//   }
//   appendToTail(data) {
//     const end = new Node(data);
//     let n = this;
//     while(n.next !== null) {
//       n = n.next;
//     }
//     n.next = end;
//     return this;
//   }
//   setNext(node) {
//     this.next = node;
//   }
// }

// function isPalindrome(list) {
//   return isEqual(reverse(list), list);
// }
// function reverse(list) {
//   let reversed = new Node(list.data);
//   while(list.next) {
//     let node = new Node(list.next.data);
//     node.next = reversed;
//     reversed = node;
//     list = list.next;
//   }
//   return reversed;
// }

// function isEqual(list1, list2) {
//   while (list1 !== null && list2 !== null) {
//     if (list1.data !== list2.data) {
//       return false;
//     }
//     list1 = list1.next;
//     list2 = list2.next;
//   }
//   return list1 === null && list2 === null;
// }

// let list1 = new Node(7).appendToTail(1).appendToTail(2);
// let list2 = new Node(7).appendToTail(1).appendToTail(2).appendToTail(1).appendToTail(7);

// console.log(isPalindrome(list1));
// console.log(isPalindrome(list2));

// ////////////////////

// class Stack {
//   constructor(data) {
//     this.top = data !== null ? new StackNode(data) : null;
//   }

//   pop() {
//     if (this.top === null) return null;
//     let item = this.top.data;
//     this.top = this.top.next;
//     return item;
//   }

//   push(data) {
//     let node = new StackNode(data);
//     node.next = this.top || null;
//     this.top = node;
//   }

//   peak() {
//     return this.top !== null ? this.top.data : null;
//   }

//   isEmpty() {
//     return this.top === null;
//   }
// }

// class StackNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function isPalindromeIterative(head) {
//   let slow = head;
//   let fast = head;
//   let stack = new Stack();

//   while (fast !== null && fast.next !== null) {
//     stack.push(slow.data);
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   if (fast !== null) { // is odd, skip middle
//     slow = slow.next;
//   }

//   while (slow !== null) {
//     var item = stack.pop();
//     if (item !== slow.data) return false;
//     slow = slow.next;
//   }
//   return true;
// }

// console.log(isPalindromeIterative(list1));
// console.log(isPalindromeIterative(list2));