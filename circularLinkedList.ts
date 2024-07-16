class LinkedListNode {
  data: number;
  next: LinkedListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data:number):void {
    const node = new LinkedListNode(data);
    if(this.head==null){
      this.head = node;
      this.tail = node;
      node.next= this.head;
    }else{
      if(this.tail){
        this.tail.next = node 
        this.tail = node;
        node.next = this.head
      }

    }
  }

  print():void{
    let temp = this.head;
    if(!temp)
      console.log("Empty circular linked list")
    else{
      console.log(temp.data)
      while(temp && temp.next!=this.head){
        temp = temp.next
        console.log(temp?.data)
      }
      
    }
  }
}


const cll = new CircularLinkedList()
cll.add(1)
cll.add(2)
cll.add(3)
cll.add(4)
cll.add(5)
cll.print()