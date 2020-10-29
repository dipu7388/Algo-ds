/**
 * An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.
 */

 let closeToZero=(arr:number[])=>{

   arr.sort((a,b)=>(Math.abs(a) - Math.abs(b)) );
   let first:number=0, second:number=0, min=Number.MAX_VALUE;
  for (let i = 0; i < arr.length-1; i++) {
      let sum=Math.abs(arr[i]+ arr[i+1]);
      if(sum< min){
          min=sum;
          first=i;
          second=i+1;
      }
  }
    console.log("Output: ",arr[first], arr[second]);
    
 }

 closeToZero([1, 60, -10, 70, -80, 85]);