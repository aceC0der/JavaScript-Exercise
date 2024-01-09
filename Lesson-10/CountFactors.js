function solution(N){
    let count = 0;
    for(let i=1; i<=Math.sqrt(N); i++){
        if(N%i==0){
            count += 2;
            count -= (i==(N/i));
        }
    }
    return count;
}
