// - Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// - Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// - Else “Scalene triangle.” since values of all sides are unequal.
let side1=prompt("enter side1 of triangle");
let side2=prompt("enter side2 of triangle");
let side3=prompt("enter side3 of triangle");
if (side1==side2&&side1==side3&&side2==side3){
    console.log("Equilateral triangle." );
}
else if (side1==side2 ||side2==side3 ||side1==side3)
{
    console.log("Isosceles triangle.");
}
else{
    console.log("Scalene triangle.");
}