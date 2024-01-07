function solution(A){
    const len = A.length;
    let frequency = Array(len+1).fill(0);
    for(let i=0; i<len; i++){
        if(A[i]>len) return 0;
        frequency[A[i]]++;
        if(frequency[A[i]]>1) return 0; 
    }
    return 1;
}

console.log(solution([4, 1, 2]));