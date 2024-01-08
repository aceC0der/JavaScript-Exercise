function solution(A){
    const len = A.length;
    A.sort((a, b) => a-b);
    const v1 = A[0]*A[1]*A[2];
    const v2 = A[0]*A[1]*A[len-1];
    const v3 = A[len-1]*A[len-2]*A[len-3];
    return Math.max(v1, v2, v3);
    // console.log(mappedArray);
}

////////////////// Wrong Assumpsions//////////////////
/////////I thought the task is to determine the indices of the triplet of max product //////////////
// function solution(A){
//     const len = A.length;
//     const mappedArray = A.map((val, index) => [val, index]);
//     mappedArray.sort((a, b) => a[0]-b[0]);
//     const v1 = mappedArray[0][0]*mappedArray[1][0]*mappedArray[2][0];
//     const v2 = mappedArray[0][0]*mappedArray[1][0]*mappedArray[len-1][0];
//     const v3 = mappedArray[len-1][0]*mappedArray[len-2][0]*mappedArray[len-3][0];
//     let answer = [];
//     if(v1>v2 && v1>v3){
//         answer = [mappedArray[0][1], mappedArray[1][1], mappedArray[2][1]];
//     }
//     if(v2>v1 && v2>v3){
//         answer = [mappedArray[0][1], mappedArray[1][1], mappedArray[len-1][1]];
//     }
//     if(v3>v1 && v3>v2){
//         answer = [mappedArray[len-1][1], mappedArray[len-2][1], mappedArray[len-3][1]];
//     }
//     answer.sort((a, b) => a-b);
//     return answer;
//     // console.log(mappedArray);
// }

console.log(solution([-3, 1, 2, -2, 5, 6]));