// let arr1 = [1,2,3,4];
// let arr2 =[6,7,8,9];

// let sumArr = [];

// for(let i=0; i<arr1.length; i++){
//     sumArr[i] = arr1[i]+arr2[i];
// }

// console.log("Summ arr", sumArr);

// Q2. FIND VALUE FROM ARRAY (SEARCH)

let arr =[4,5,7,3,9,1];

let search = 11;

for(let i=0; i<=arr.length; i++){
    if(search===arr[i]){
        console.log("Postion matched", i+1);
    }else if(search !=arr[i]){
        console.error("Value not Present", search);
        break;
    }
}


