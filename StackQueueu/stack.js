class stack{
    constructor (size){
    this.size = size;
    this.top = -1;
    this.stack = new Array(size);
    }
    push(element){
        if(this.top == this.size-1)
            {
                return 'Array is full';
            }
        else{
            this.top = this.top+1;
            this.stack[this.top] = element;
            return element;
        }
    }
    pop(){
        if(this.top == -1){
            return 'No elements to return';
        }
        else {
            let ans = this.stack[this.top];
            this.top = this.top-1;
            return ans;
        }
    }
    topofelement()
    {
        if (this.top!== -1)
            {
                return this.stack[this.top];
            }

    }
    sizeof()
    {
        if (this.top!== -1){
            return this.top+1;
        }
    }
}

const stackoperation = new stack(5);
console.log(stackoperation.pop(2));
console.log(stackoperation.push(4));
console.log(stackoperation.push(3));
console.log(stackoperation.pop());
console.log(stackoperation.topofelement());
console.log(stackoperation.stack);