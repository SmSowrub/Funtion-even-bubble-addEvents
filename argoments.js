function add_Numbers(num1,num2){
    for(var i=0;i<arguments.length;i++){//arguments keyword
        var result=arguments[i];
        console.log(result);
    }
    return result;
}
var added=add_Numbers(22,33,42,22);
console.log(added);


function add_Numbers2(num1,num2){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        var result=arguments[i];
        sum=result+sum;
    }
    return sum; 
}
var added2= add_Numbers2(12,34,56,78,77);
console.log(added2);