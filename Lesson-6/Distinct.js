function solution(A){
    if(A.length==0) return 0;
    A.sort((a, b) => a-b);
    let num = 1;
    const len = A.length;
    for(let i=1; i<len; i++){
        if(A[i]!=A[i-1]) num++;
    }
    return num;
}

console.log(solution());