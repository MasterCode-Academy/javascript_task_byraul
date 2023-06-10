// Exercise-6: Find check if a year is leap year or not
// If year is divisble by 4 and not divisble by 100 then print “leap year”.
// Or if year is divisible by 400 then print “leap year”.
// Else print “not a leap year”.
//     2012 //"Year 2012 is a leap year"
//     1900 //"Year 1900 is not a leap year"
//     2000 //"Year 2000 is a leap year"
//     2011 //"Year 2011 is not a leap year"
function yearIsLeap(year)
{
    if (year%4==0 && year%100!==0)
    {
        console.log("leap year");
    }
    else if (year%400==0)
    {
        console.log("Leap year");
    }
    else {
        console.log("not a leap year");
    }
}
let result =yearIsLeap(prompt("enter year"));
console.log(result);