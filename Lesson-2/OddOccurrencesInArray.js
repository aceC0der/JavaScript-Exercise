function solution(A){
    let xor = 0;
    for(let i=0; i<A.length; i++){
        xor ^= A[i];
    }
    return xor;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))

