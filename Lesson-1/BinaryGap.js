function checkBit(x, i){
    return ((x>>i)&1);
}


function solution(N){
    isOne = false;
    cnt = 0;
    mx = 0;
    for(let i=31; i>=0; i--){
        if(!checkBit(N, i)){
            cnt++;
            continue;
        }
        if(!isOne){
            isOne = true;
            cnt = 0;
        }
        mx = Math.max(cnt, mx);
        cnt = 0;
    }
    return mx;
}
