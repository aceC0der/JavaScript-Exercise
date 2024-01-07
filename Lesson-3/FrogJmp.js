function solution(X, Y, D){
    const dif = Y-X;
    const answer = Math.floor(dif/D) + (dif%D!=0);
    return answer;
}

console.log(solution(10, 85, 30));