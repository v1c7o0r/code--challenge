const studentsMarks= parseInt(prompt("Enter Marks (0-100):"));
if (isNaN(studentsMarks)||studentsMarks<0|| studentsMarks>100) {
    console.log("Invalid input enter a students marks between 0 and 100.");
    
} else {
    let grade;
    if(studentsMarks >= 79){
        grade = "A";
    }else if(studentsMarks >= 60){ 
        grade = "B";
    }else if( studentsMarks >= 49){ 
        grade ="C";
    }else if( studentsMarks >= 40){
        grade ="D";
    }else  {
        grade ="E"
    }
console.log("Grade:" + grade)
    
}
