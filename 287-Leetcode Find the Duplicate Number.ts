/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums:number[]) :number{
    let array = Array(nums.length).fill(0);
    for(let num of nums){
        if(array[num]>0)
            return num;
        array[num]++;
    }
    return -1;
};