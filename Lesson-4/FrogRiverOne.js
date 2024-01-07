function solution(X, A){
    const len = A.length;
    let minTime = Array(X+1).fill(-1);
    // console.log(minTime);
    for(let i=0; i<len; i++){
        const pos = A[i];
        if(minTime[pos]==-1) minTime[pos] = i;
    }
    // console.log(minTime);
    minTime[0] = 0;
    const ans = minTime.reduce((a, b)=>{
        if(b==-1 || a==-1) return -1;
        return Math.max(a, b);
    }, -3);
    return ans;
}

console.log(solution(5, [1, 2, 1, 4, 2, 3, 5, 4]));