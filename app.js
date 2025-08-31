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
    size(){
        let current = this.head;//current is the first node of the list
        let index = 0;
        while(current){
           index++;
           current = current.next;
        }
         console.log(index)
    }
    headNode(){
        console.log(this.head.data);//just the first node if printed
    }
    tailNode(){
        let current = this.head;
        let tail;
        while(current){//iterates over all the nodes and gets to the last one
            tail = current.data;
            current = current.next;
        }
        console.log(tail)
    }
    at(index){
       let current = this.head; //the 1st node 
       for(let i = 1; i < index; i++){//simple for loop to get the node on the index given
            current = current.next;
        }
         console.log(current.data);
    }
    pop(){
        let current = this.head;//the 1st node 
        while(current.next !== this.tail){
            current = current.next;//gets to the next node
        }
        const data = this.tail.data;
        current.next = null;
        this.tail = current;

    }
    printList(){
        let current = this.head;//the 1st node 
        while(current){
            console.log(current);
            current = current.next;//gets to the next node
        }
    }
}

const list1 = new LinkedList();

list1.append("dog");
list1.append("cat");
list1.prepend("parrot");
list1.append("hamster");
list1.append("snake");
list1.append("turtle");

// list1.printList();
// list1.size();
// list1.headNode();
// list1.tailNode();
// list1.at(2);
list1.pop();
list1.printList();

