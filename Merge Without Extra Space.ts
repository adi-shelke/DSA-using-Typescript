class Solution {
    //Function to merge the arrays.
    merge(arr1:number[], arr2:number[], n:number, m:number):void
    {
        for(let i=0;i<n;i++){
            if(arr2[0]<=arr1[i]){
                arr1.splice(i,0,arr2[0]);
                arr2.shift();
            }
          
        }
        arr2.unshift(...arr1.splice(n))
        arr1.slice(0,4);
        arr2.sort((a,b)=>a-b)
        
    }
}