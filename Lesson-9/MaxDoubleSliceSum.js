function solution(A){
    let maxSum = -Infinity;
    let currentSum = 0;
    let mn = Infinity;
    const len = A.length;
    let mx = -Infinity;
    for(let i=1; i<len-1; i++){
        currentSum += A[i];
        mn = Math.min(mn, A[i]);
        mx = Math.max(mx, A[i]);
        if(currentSum<0) {
            currentSum = 0;
            mn = Infinity;
        }
        if(mn!=Infinity) {
            // console.log(maxSum, mn, currentSum);
            maxSum = Math.max(maxSum, currentSum-mn);
        }
    }
    if(len<=3) mx = 0;
    return maxSum==-Infinity ? 0 : Math.max(maxSum, mx);
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2, 3, 2, 6, -1, 4, 5, -1, 2]));
console.log(solution([-1, -1, -1, -1, -1, -1]));
console.log(solution([-2, -3, -4, 1, -5, -6, -7]));