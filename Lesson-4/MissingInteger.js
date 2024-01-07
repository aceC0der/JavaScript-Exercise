function solution(A){
    A.sort((a, b) => a-b); //sort the array
    const answer = A.reduce((i, val) => {
        if(i!=val) return i;
        return i+1;
    }, 1);
    return answer;
}

console.log(solution([1, 3, 6, 4, 1, 2]));