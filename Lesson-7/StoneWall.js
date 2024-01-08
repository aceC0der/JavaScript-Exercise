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
}

function solution(H){
    let stk = new Stack();
    stk.push(H[0]);
    const len = H.length;
    if(!len) return 0;
    let blocks = 1;
    for(let i=1; i<len; i++){
        if(stk.isEmpty()) {
            stk.push(H[i]);
            continue;
        }
        let t = stk.top();
        if(H[i]<t){
            while(!stk.isEmpty() && H[i]<t){
                stk.pop();
                t = stk.top();
            }
            if(H[i]!=t) {
                blocks++;
            }
        }
        else if(H[i]>t){
            blocks++;
        }
        stk.push(H[i]);
    }
    return blocks;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));