// Exercise-4: Find number of days in a given month
// If month is outside the range of 1 and 12 print “Invalid month”.
// If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// Else print “31 days”.
function findNumberOfDays(month)
{
    if (month<1 ||month>12)
    {
        console.log("Invalid month");
    }
      else if (month==2){
        let year=prompt("enter year");
        if (year%2!==0){
            console.log("29 days");
        }
        else {
            console.log("28 days");
        }

      }
      else if (month==4 ||month==6 ||month==9 || month==11)
      {
        console.log("30 days");
      }
      else {
        console.log("31 days");
      }
}
let resultOfMonths=findNumberOfDays(prompt("enter number for months"));
console.log(resultOfMonths);