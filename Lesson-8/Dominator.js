function solution(A){
    let frequency = {};
    const len = A.length;
    for(let i=0; i<len; i++){
        if(frequency[A[i]]==undefined){
            frequency[A[i]]=0;
        }
        frequency[A[i]]++;
        if(frequency[A[i]]>len/2){
            return i;
        }
    }
    return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));