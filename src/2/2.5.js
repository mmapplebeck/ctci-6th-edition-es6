import Node from '../structures/LinkedList'

export const sumLists = (first, second, summed = null, carry = 0) => {
  if (first === null && second === null && carry === 0) return summed
  let sum = carry
  if (first !== null) sum += first.data
  if (second !== null) sum += second.data
  if (sum >= 10) {
    sum = sum - 10
    carry = 1
  } else {
    carry = 0
  }
  if (summed === null) {
    summed = new Node(sum)
  } else {
    summed.appendToTail(sum)
  }
  return sumLists(
    first !== null ? first.next : null,
    second !== null ? second.next : null,
    summed,
    carry
  )
}


































// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         return this;
//     }
//     appendToTail(data) {
//         const end = new Node(data);
//         let n = this;
//         while(n.next !== null) {
//             n = n.next;
//         }
//         n.next = end;
//         return this;
//     }
//     setNext(node) {
//         this.next = node;
//     }
// }

// function sumLists(list1, list2, carry = 0) {
//     let sum = 0;
//     if (list1) sum += list1.data || 0;
//     if (list2) sum += list2.data || 0;
//     sum += carry;
//     if (sum >= 10) {
//         carry = 1;
//         sum -= 10;
//     } else {
//         carry = 0;
//     }
//     let summedList = new Node(sum);
//     if (list1.next || list2.next) {
//         summedList.setNext(sumLists(list1.next || 0, list2.next || 0, carry));
//     }
//     return summedList;
// }

// let list1 = new Node(7).appendToTail(1).appendToTail(2);
// let list2 = new Node(5).appendToTail(8).appendToTail(3).appendToTail(9);

// console.log(sumLists(list1, list2));