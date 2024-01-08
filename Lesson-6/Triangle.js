function solution(A){
    const len = A.length;
    A.sort((a, b)=>a-b);
    for(let i=0; i<len-2; i++){
        if(A[i]+A[i+1]>A[i+2]) return 1;
    }
    return 0;
}

console.log(solution([10, 2, 5, 1 , 8, 20]));