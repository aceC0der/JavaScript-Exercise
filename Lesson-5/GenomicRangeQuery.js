function solution(S, P, Q){
    const len = S.length;
    let A = Array(len+1).fill(0);
    let C = Array(len+1).fill(0);
    let G = Array(len+1).fill(0);
    let T = Array(len+1).fill(0);
    for(let i=0; i<len; i++){
        A[i+1] += (S[i]=='A');
        C[i+1] += (S[i]=='C');
        G[i+1] += (S[i]=='G');
        T[i+1] += (S[i]=='T');
    }
    for(let i=1; i<len+1; i++){
        A[i] += A[i-1];
        C[i] += C[i-1];
        G[i] += G[i-1];
        T[i] += T[i-1];
    }
    // console.log(A);
    // console.log(C);
    // console.log(G);
    // console.log(T);
    const queryLen = Q.length;
    const score = [];
    for(let i=0; i<queryLen; i++){
        const l = P[i], r = Q[i]+1;
        if(A[r]-A[l]>0) score.push(1);
        else if(C[r]-C[l]>0) score.push(2);
        else if(G[r]-G[l]>0) score.push(3);
        else if(T[r]-T[l]>0) score.push(4);
    }
    return score

}

console.log(solution('AC', [0, 0, 1], [0, 1, 1]));