function solution(A){
    let frequency = {};
    const len = A.length;
    let mxVal = -1;
    for(let i=0; i<len; i++){
        if(frequency[A[i]]==undefined){
            frequency[A[i]]=0;

        }
        frequency[A[i]]++;
        if(frequency[A[i]]>len/2){
            mxVal = A[i];
        }
    }
    if(mxVal==-1) return 0;
    let tempFrequency = {};
    let count = 0;
    for(let i=0; i<len-1; i++){
        if(tempFrequency[A[i]]==undefined){
            tempFrequency[A[i]]=0;
        }
        tempFrequency[A[i]]++;
        const right = frequency[mxVal]-tempFrequency[mxVal];
        if(tempFrequency[mxVal]>(i+1)/2 && right>(len-i-1)/2) count++;
    }
    
    return count;
}

console.log(solution([4, 3, 4, 4, 4, 2]));
console.log(solution([4, 4, 2, 5, 3, 4, 4, 4]));