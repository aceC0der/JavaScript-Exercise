function solution(A){
    const len = A.length;
    const divs = [];
    for(let i=1; i<=Math.sqrt(len); i++){
        if(len%i==0){
            divs.push(i);
            divs.push(len/i);
        }
    }
    divs.sort((a, b) => b-a);
    // console.log(divs);
    for(let i=0; i<divs.length; i++){
        const block = len/divs[i];
        let flag = true;
        let sep = block;
        // console.log(block, "****");
        for(let j=0; j<A.length; j++){
            // console.log(j, sep, "##");
            if(j-1>=0 && j+1<len && A[j-1]<A[j] && A[j]>A[j+1]){
                j = sep-1;
                sep += block;
                continue;
            }
            if(j==sep-1){
                flag = false;
                break;
            }
        }
        if(flag){
            return divs[i];
        }
    }
    return 0;
}

console.log(solution([1, 2, 3, 4, 3, 1, 2 ,3, 4, 6, 2]));
console.log(solution([0, 2]));
console.log(solution([0, 1, 0, 0, 1, 0, 0, 1, 0]));