function solution(A){
    let answer = 0;
    let east = 0, west = 0;
    const MAX = 1000000000;
    const len = A.length;
    for(let i=0; i<len; i++){
        east += (A[i]==0);
        west += (A[i]==1);
    }
    for(let i=0; i<len; i++){
        west -= (A[i]==1);
        if(A[i]==0){
            answer += west;
        }
        if(answer>MAX) return -1;
    }
    return answer;
}

console.log(solution([0, 1, 0, 1, 1]));