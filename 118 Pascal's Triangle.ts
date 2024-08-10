function generate(numRows: number): number[][] {
    if(numRows===1){
        return [[1]];
    }
    if(numRows===2){
        return [[1],[1,1]];
    }
    const arr: number[][] = new Array(numRows).fill(null).map(() => []);
    arr[0]=[1]
    arr[1]=[1,1]
    for(let i=3;i<=numRows;i++){
        let tempArr = new Array(i).fill(0);
        tempArr[0]=1;
        tempArr[i-1]=1;
        let index =1
        for(let k=0;k<(arr[i-2].length)-1;k++){
            tempArr[index] = arr[i-2][k]+arr[i-2][k+1];
            index++;
        }
        arr[i-1]=tempArr;

    }
    return arr;
};