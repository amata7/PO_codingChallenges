class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

function findIntersectingNode(A, B) {
  const arrA = [];
  const arrB = [];
  let headA = A.head;
  let headB = B.head;
  while (headA !== null) {
    arrA.push(headA.data);
    headA = headA.next;
  }
  while (headB !== null) {
    arrB.push(headB.data);
    headB = headB.next;
  }
  console.log({ 'First List': arrA });
  console.log({ 'Second List': arrB });
  const intersection = arrA.filter((element) => arrB.includes(element));
  if (intersection.length === 0) {
    console.log('There is no intersection between these two lists');
  } else {
    console.log(
      'These two lists intersect when node value equals ' + intersection
    );
  }
}
//Uncomment the following line and use 'node listNodes.js' to run the example below
// runTest();
function runTest() {
  let testA1 = new ListNode(3);
  let testA2 = new ListNode(7);
  let testA3 = new ListNode(8);
  let testA4 = new ListNode(10);
  testA1.next = testA2;
  testA2.next = testA3;
  testA3.next = testA4;

  let testB1 = new ListNode(99);
  let testB2 = new ListNode(1);
  let testB3 = new ListNode(8);
  let testB4 = new ListNode(11);
  testB1.next = testB2;
  testB2.next = testB3;
  testB3.next = testB4;

  let listA = new LinkedList(testA1);
  let listB = new LinkedList(testB1);
  console.log('\n---Test using listA and listB---');
  findIntersectingNode(listA, listB);

  let testC1 = new ListNode(1);
  let testC2 = new ListNode(2);
  let testC3 = new ListNode(3);
  let testC4 = new ListNode(4);
  testC1.next = testC2;
  testC2.next = testC3;
  testC3.next = testC4;

  let testD1 = new ListNode(3199);
  let testD2 = new ListNode(561);
  let testD3 = new ListNode(1);
  let testD4 = new ListNode(1452);
  testD1.next = testD2;
  testD2.next = testD3;
  testD3.next = testD4;

  let listC = new LinkedList(testC1);
  let listD = new LinkedList(testD1);
  console.log('\n---Test using listC and listD---');
  findIntersectingNode(listC, listD);

  let testE1 = new ListNode(1);
  let testE2 = new ListNode(2);
  let testE3 = new ListNode(3);
  let testE4 = new ListNode(4);
  testE1.next = testE2;
  testE2.next = testE3;
  testE3.next = testE4;

  let testF1 = new ListNode(5);
  let testF2 = new ListNode(6);
  let testF3 = new ListNode(7);
  let testF4 = new ListNode(8);
  testF1.next = testF2;
  testF2.next = testF3;
  testF3.next = testF4;

  let listE = new LinkedList(testE1);
  let listF = new LinkedList(testF1);
  console.log('\n---Test using listE and listF---');
  findIntersectingNode(listE, listF);
}
