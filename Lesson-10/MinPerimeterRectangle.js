function solution(N){
    let minPerimeter = Infinity;
    for(let i=1; i<=Math.sqrt(N); i++){
        if(N%i==0){
            minPerimeter = Math.min(minPerimeter, (i+(N/i))*2);
        }
    }
    return minPerimeter;

}

console.log(solution(30))