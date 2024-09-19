// add a method remove() to the linked list that deletes a node to the specified index.

class DoubledLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: this.tail,
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null,
    }
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      previous: null
    }
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    newNode.previous = leader;
    holdingPointer.previous = newNode
    this.length++;

    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.previous = leader;
    this.length--;

    console.log(this.head)
    console.log(this.tail)
    console.log("=============+===")
    return this.printList();
  }
}

let myLinkedList = new DoubledLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.prepend(122);
myLinkedList.insert(2, 99);
myLinkedList.insert(3, 88);
console.log(myLinkedList.printList())
myLinkedList.remove(1);
console.log(myLinkedList.printList())
