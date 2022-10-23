// // function evenify (num){
// //     if(num % 2==0){
// //         console.log(num, 'is a odd Number');
// //     }
// //     else{
// //         console.log(num*2,'is not a odd number');
// //     }
// // }
// // evenify(13);
// function evenify(num){
//     if (num % 2 == 0) {
//         return num;
//     }
//     else{
//         return num*2;
//     }
    
// }
// var result=evenify(13);
// var square=result*result;
// console.log(square);

// function evenify_all(nums){
//     var evenify_array=[];
//     for(let i =0;i<nums.length;i++){
//         var num=nums[i];
//        var result= evenify(num);
//        evenify_array.push(result);
//     }
//     return evenify_array;
// }
// var nums =[23,44,12,56,78,99,12]
// var nums_array=evenify_all(nums);
// console.log(nums_array);


function evenify(Number){
    if(Number%2==0){
        return Number;
    }
    else{
        return Number*2;
    }
}
var result=evenify(16);
var square=result*result;
console.log(square);

function evenify_all(Numbers){
  var  evenify_err=[];
    for(var i=0;i<Numbers.length;i++){
        var Number=Numbers[i]
        var result=evenify(Number);
        evenify_err.push(result);
    }
    return evenify_err;
}
var Numbers=[22,33,56,77,89,100];
var Numbers_arr=evenify_all(Numbers);
console.log(Numbers_arr);