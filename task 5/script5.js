
// Exercise-5: Find the grade for input marks
// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

function findOfGrade (points){
     
    if (points>=90 && points<=100)
    {
        console.log("S grade");
    }
    else if (points>=80 && points<90)
    {
        console.log("A grade");
    }
    else if (points>=70 && points<80)
    {
        console.log("B grade");
    }
    else if (points>=60 && points<70)
    {
        console.log("C grade");
    }
    else if (points>=50 && points<60)
    {
        console.log("D grade");
    }
    else if (points>=40 && points<50)
    {
        console.log("E grade");
    }
    else if (points>=0 && points<40)
    {
        console.log("Student has failed");
    }
    else{
        console.log("Invalid marks");
    }
}
let result =findOfGrade(prompt("enter the grade points"));
console.log(result);