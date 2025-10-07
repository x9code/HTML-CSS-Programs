const ar = [23,83,11,98,44,76];
function findMax(ar){
    let len = ar.length;
    let big = -Infinity;
    while(len--){
        if(ar[len]>big){
            big = ar[len];
        }
    }
    return big;
}
console.log(findMax(ar));