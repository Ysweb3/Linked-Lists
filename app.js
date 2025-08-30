class Node {//a node constructor
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {//the list resides here
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        //new node created with "data" , next = null
        const newNode = new Node(data); 
        
        if (!this.head) {//if node is empty new node is created 
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;//tail is pointing to new node
            this.tail = newNode;//tail is moved to new node
        }
    }
    prepend(data){
        const newNode = new Node(data);
        if (!this.head) {//if node is empty new node is created 
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;//the forward node is set to this head
            this.head = newNode;//the data is added before the current node
        
        }
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list1 = new LinkedList();

list1.append("dog");
list1.append("cat");
list1.prepend("parrot");
list1.append("hamster");
// list.append("snake");
// list.append("turtle");

list1.printList();


