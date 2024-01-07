function solution(N, A){
    let mx = 0, allValue = 0;
    const len = A.length;
    let counter = Array(N).fill(0);
    // console.log(counter);
    for(let i=0; i<len; i++){
        const X = A[i]-1;
        if(counter[X]<allValue) counter[X] = allValue;
        if(0<=X && X<N) {
            counter[X]++;
            mx = Math.max(mx, counter[X]);
        }
        else{
            allValue = mx;
        }
    }
    for(let i=0; i<N; i++){
        counter[i] = Math.max(counter[i], allValue);
    }
    return counter;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));