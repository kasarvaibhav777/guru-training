
// for (let i = 1; i <= 50; i++) {
// 	let factor =0;
// 	for (let j = 1; j <= i; j++) 
// 	{
// 		if (i % j == 0)
// 		 {
// 			factor++;
// 		 }
// 	}
	
// 	if (factor == 2) 
// 	{
// 		console.log(i);
// 	}
// }
// let arr=[1,2,3,4,5,6]
// let fact=11;
// let sum=0;
// let prod=1;
// for(let i=1;i<=arr.length-1;i++){
// if(arr[i]%2==0){
//     fact=fact+1;
//     sum=sum+arr[i];
//     prod=prod*arr[i];
// }
// }console.log(fact,sum,prod);
function add1(arr){
    for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr[i].length-1;j++){
      arr[i][j]++;
    }
  }
  console.log(arr);
  }
  add1([[14,21,23,64], [33,46,51,65]]);
