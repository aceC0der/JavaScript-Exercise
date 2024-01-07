function solution(A){
    let mn = Infinity;
    let sum = 0;
    const n = A.length;
    for(let i=0; i<n; i++){
        sum += A[i];
    }
    let p1 = 0;
    for(let i=0; i<n-1; i++){
        p1 += A[i];
        const p2 = sum-p1;
        mn = Math.min(mn, Math.abs(p1-p2));
    }
    return mn;
}
// solution([3, 1, 2, 4, 3]);
console.log(solution([2, 2]));