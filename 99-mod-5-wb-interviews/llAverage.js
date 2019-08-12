// --- DIRECTIONS

// Write a function called llAverage which takes in a linked list. Return the average of all numerical values contained within the list 

// --- EXAMPLES

// const ll = [17] -> [2] -> [56] -> [8] -> null
// llAverage(ll) => 20.75
// const ll = [22] -> ['not a number'] -> [4] -> [13] -> null
// llAverage(ll) => 13

// --- SETUP

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
    return this;
  }
}

const ll = new LinkedList()
ll.append(17);
ll.append(2)
ll.append(56)
ll.append('not a number')
ll.append(8)

// --- SOLUTION
// --- Space Complexity = O(1)
// --- Time Complexity = O(N)

function llAverage(list) {
  let total = list.head.value;
  let numericalNodes = 1;
  let currNode = list.head
  while (currNode.next) {
    if (typeof currNode.next.value === 'number') {
      total += currNode.next.value;
      numericalNodes++;
    }
    currNode = currNode.next;
  }
  return total / numericalNodes
}

llAverage(ll)