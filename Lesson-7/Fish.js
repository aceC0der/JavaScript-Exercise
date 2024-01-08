class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    top(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return (this.items.length==0);
    }

    printStack(){
        console.log(this.items);
    }
}



function solution(A, B){
    let stk = new Stack();
    const len = A.length;
    let deadFish = 0;
    let crnt = 0;
    while(crnt<len){
        // console.log(crnt);
        if(B[crnt]==1){
            stk.push(crnt);
            crnt++;
            continue;
        }
        if(stk.isEmpty()){
            if(B[crnt]==0) crnt++;
            continue;
        }
        while(!stk.isEmpty()){
            const last = stk.top();
            deadFish++;
            // console.log(l)
            if(A[last]>A[crnt]){
                crnt++;
                break;
            }
            stk.pop();
        }
        
    }
    return len-deadFish;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 1, 1, 0]));