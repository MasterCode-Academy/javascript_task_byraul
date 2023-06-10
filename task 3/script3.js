function orderOfNumbers(first,second, third)
{
    let level1,level2,level3;
    if (first<=second){
        level1=first;
        level3=second;
    }
    else{
        level1=second;
        level3=first;

    }
    if (third<=level1){
        level2=level1;
        level1=third;
        
    }
    else if (third >=level3){
        level2=level3;
        level3=third;
    }
    else{
        level2=third;
    }
    return {level1,level2,level3};
}
let result=orderOfNumbers(23,67,1);
console.log(result);