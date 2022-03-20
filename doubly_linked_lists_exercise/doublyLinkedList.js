function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []){
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function(val){
    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        newNode.prev =  this.tail
        this.tail = newNode;
    }
    this.length++;

    return this;
}

DoublyLinkedList.prototype.unshift = function(val){
    let newNode = new Node(val);

    if(this.head === null){
        this.head = newNode;
        this.tail = newNode;
    }
    else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.length++ ;

    return this;
}

DoublyLinkedList.prototype.insert = function(index, val){
    if (index < 0 || index >= this.length) {
        return undefined;
    }
    
    let newNode = new Node(val);
    
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
        if (counter === index - 1) {
        break;
        }
    counter++;
    currentNode = currentNode.next;
    }
    currentNode.next.prev = newNode;
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
    
    this.length++;
    
    return this.length;
}


DoublyLinkedList.prototype.getNode = function(index){
    if (index < 0 || index >= this.length) {
        return undefined;
    }
    
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
        if (counter === index) {
            break;
        }
        counter++;
        currentNode = currentNode.next;
    }
    
    return currentNode;
}

DoublyLinkedList.prototype.get = function(index){
    return  this.getNode(index) ? this.getNode(index).val : null ;
}

DoublyLinkedList.prototype.set = function(index, val){
    let node = this.getNode(index);
    if(node){
        node.val = val
        return val;
    }else{
        return null;
    }
}

DoublyLinkedList.prototype.pop = function(){
    if (!this.tail) {
        return undefined;
    }
    let deleteNode = this.tail
    if(this.tail.prev){
        let prevNode = this.tail.prev;
        this.prev = null;
        prevNode.next = null;
        this.tail = prevNode;
    }
    

    this.length--;
    return deleteNode.val;

    
}

DoublyLinkedList.prototype.shift = function(){
    if(this.head){
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;    
        this.length--;
        return temp.val;
    }else return undefined;

}

DoublyLinkedList.prototype.remove = function(index){
    if (index < 0 || index >= this.length) {
        return undefined;
    }
    let removedNode =  this.getNode(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null ; 
    this.length--;
    return removedNode;
}

DoublyLinkedList.prototype.reverse = function(){
    let currentNode =  this.head
    let temp = null ;
    this.tail = this.head;
    while(currentNode){
        temp = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = temp;
        currentNode = currentNode.prev;
        
    }
    if(temp){
        temp = temp.prev;
        this.head = temp;
    }
    
}
module.exports = DoublyLinkedList;