function solution(A){
    const len = A.length;
    const mappedArray = A.map((val, idx) => {
        return [idx-val, idx+val];
    })
    mappedArray.sort((a, b) => {
        if(a[0]==b[0]) return a[1]-b[1];
        return a[0]-b[0];
    })
    let conflicts = 0;
    for(let i=0; i<len; i++){
        let l=i, r=len-1;
        const left = mappedArray[i][0], right = mappedArray[i][1];
        // let mid = 0;
        while(l<=r){
            const mid = Math.floor((l+r)/2);
            if(left<=mappedArray[mid][0] && mappedArray[mid][0]<=right){
                l = mid+1;
            }
            else{
                r = mid-1;
            }
        }
        conflicts += (l-i-1);
        // console.log(l, r);
    }

    // console.log(mappedArray);
    if(conflicts>10000000) return -1;
    return conflicts;
}

console.log(solution([1, 5, 2, 1, 4, 0]));