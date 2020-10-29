// Median of two sorted arrays of same size
/**
 * There are 2 sorted arrays A and B of size n each. Write an algorithm to find the median of the array obtained after merging the above 2 arrays(i.e. array of length 2n). The complexity should be O(log(n)). 
 */

 let median=(arr:number[])=>{
    let n= arr.length;
    if(n%2===0){

        return (arr[Math.floor(n/2)-1]+arr[Math.floor(n/2)])/2;
    }
    return arr[Math.floor(n/2)];
 }

let findMedian=(arr1:number[],arr2:number[], n:number): number | number[]=>{
    if(n<1){
        return -1;
    }
    if(n===1){
        return (arr1[0]+arr2[0])/2;
    }
    if(n===2){
    return (Math.max(arr1[0], arr2[0])+ Math.min(arr1[1],arr2[1]))/2;
    }
    let m1=median(arr1);
    let m2=median(arr2);
    
    if(m1===m2){
        return m1;
    }
    if(m1>m2){
        if(n%2===0){

            return findMedian(arr2.slice(n/2,n),arr1,n - n/2 );
        }
        return findMedian(arr2.slice(Math.floor(n/2)+1,n),arr1,n- Math.floor(n/2) -1 );
        
    }
    if(n%2===0){

        return findMedian(arr1.slice(Math.floor(n/2),n),arr2,n- n/2 );
    }
    return findMedian(arr1.slice(Math.floor(n/2),n),arr2,n- Math.floor(n/2) -1);
    
}

console.log(findMedian([1, 2, 3, 6],[4, 6, 8, 10], 4));
