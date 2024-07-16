class Queue {
    constructor (size){
        this.size = size;
        this.count = 0;
        this.rear = 0;
        this.front =0;
        this.queue = new Array(size)
    }
    enqueue(element){
        if (this.count == this.size){
            return 'Queue is full';
        }
        else{
            this.queue[this.rear%this.size] = element;
            this.rear++;
            this.count++;
            return element;
        }
    }
    dequeue(){
        if (this.count ==0){
            return 'no element to dequeue';
        }
        else{
            this.queue[this.front%this.size] = -1;// any dummy number;
            this.front++;
            this.count--;
            return "done dequeue";
        }
    }
    sizzeof(){
        return this.count;
    }
    topof(){
        if (this.count == 0){
            return "no elements in queue";

        }
        else{
            return this.queue[this.front%this.size];
        }
    }
}
const circularQueue = new Queue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
console.log(circularQueue.dequeue()); // 1
console.log(circularQueue.topof());     // 2
circularQueue.enqueue(4);
circularQueue.enqueue(5);
circularQueue.enqueue(6);
circularQueue.enqueue(7);
console.log(circularQueue.enqueue(7)); // Should indicate that the queue is full
console.log(circularQueue.sizzeof());
console.log(circularQueue.queue);