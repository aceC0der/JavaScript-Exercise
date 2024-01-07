function solution(A, B, K){
    let nextDivisible = (Math.floor(A/K)+1)*K;
    if(A%K==0) nextDivisible = A;
    // console.log(nextDivisible);
    if(nextDivisible>B) return 0;
    const dif = B-nextDivisible;
    return Math.floor(dif/K)+1;
}

console.log(solution(6, 11, 2));