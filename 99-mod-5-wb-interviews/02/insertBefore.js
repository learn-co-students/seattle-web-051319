// --- DIRECTIONS

// Write a function called insertBefore which takes in a linked list, a new node, and a value. Locate the linked list node with the value that matches the input and insert the new node into the linked list before that matching value node.  

// --- EXAMPLES

// const ll = ['a'] -> ['asf'] -> [56] -> ['something'] -> null
// insertBefore(ll, 'something', new Node('inserted!')) => 
//   ['a'] -> ['asf'] -> [56] -> ['inserted!'] -> ['something'] -> null

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
ll.append('a');
ll.append('asf')
ll.append('something')
ll.append(56)


// --- SOLUTION
// --- Space Complexity = O(1)
// --- Time Complexity = O(N)

// const ll = ['a'] -> ['asf'] -> ['something'] -> [56] -> null

function insertBefore(list, value, node) {
  let currNode = ll.head
  while (currNode.next) {
    if (currNode.next.value === value) {
      let tmp = currNode.next;
      currNode.next = node;
      node.next = tmp;
      break;
    } else {
      currNode = currNode.next
    }
  }
  return currNode // setting this as return value to see new insertion
}

insertBefore(ll, 'something', new Node('inserted!'))