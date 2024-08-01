
var merge = function(intervals: number[][]): number[][] {
    if(intervals.length===0) return []
    intervals.sort((a:number[],b:number[])=>a[0]-b[0])
    let i=0;
    while(i<intervals.length-1){
        if(intervals[i][1]>=intervals[i+1][0]){
            let tempSubArray: number[] = []
            tempSubArray.push(Math.min(intervals[i][0],intervals[i+1][0]),Math.max(intervals[i][1],intervals[i+1][1]))
            intervals.splice(i,2,tempSubArray)
        }else{
            i++
        }
    }
    return intervals;
};

let input = [[1,3],[2,6],[8,10],[15,18]]
let output = merge(input)
console.log(output) // [[1,6],[8,10],[15,18]]