function solution(A, K){
    n = A.length;
    R = [];
    K = K%n;
    if(!K) return A;
    const st = n-K;
    let i = st;
    do{
        R.push(A[i]);
        i++;
        i %= n;
    }while(i!=st);
    return R;
}

console.log(solution([3, 8, 9, 7, 6], 3));

