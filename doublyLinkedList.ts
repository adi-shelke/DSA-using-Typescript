class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  prev: LinkedListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data: number): void {
    const newNode = new LinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
  }

  addToStart(data: number): void {
    const newNode = new LinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  remove(index: number): void {
    if (index < 1) {
      console.log("Enter index greater than 0");
      return;
    }
    let currentHead = this.head;
    if (!currentHead) {
      console.log("Empty Linked List");
      return;
    }
    let count = 1;
    while (count !== index && currentHead !== null) {
      currentHead = currentHead.next;
      count++;
    }
    if (currentHead == null) {
      console.log("index out of bound");
      return;
    }
    if (currentHead.prev) currentHead.prev.next = currentHead.next;
    else this.head = currentHead.next;

    if (currentHead.next) currentHead.next.prev = currentHead.prev;
    else this.tail = currentHead.prev;
  }

  renoveTail():void{
    let currentHead = this.head
    if(!currentHead)
        return
    while(currentHead && currentHead!=this.tail)
        currentHead=currentHead.next
    
    if(currentHead && currentHead.prev){
      currentHead.prev.next = null
      this.tail = currentHead.prev
      currentHead.prev = null
    }
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const dll = new DoublyLinkedList();
dll.add(5);
dll.add(6);
dll.add(7);
dll.add(8);
dll.addToStart(4);
dll.remove(3);
dll.renoveTail()
dll.print();
