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


function solution(S){
    let stk = new Stack();
    const len = S.length;
    for(let i=0; i<len; i++){
        if(S[i]=='(' || S[i]=='{' || S[i]=='['){
            stk.push(S[i]);
        }
        else{
            if(stk.isEmpty()){
                return 0;
            }
            const t = stk.top();
            // console.log(S[i], t);
            if(
                (S[i]==')' && t=='(') ||
                (S[i]=='}' && t=='{') ||
                (S[i]==']' && t=='[')
            ){
                stk.pop();
            }
            else{
                // console.log("***");
                return 0;
            }
        }
    }
    return stk.isEmpty() ? 1 : 0;
}

console.log(solution("([)()]"));