const name = "Norhan Mohamed" ;
let age = 20 ;
var status = true ;
let grades = [90 , 80 , 70];
let total_grade = 0;
for(let i=0;i<grades.length;i++){
    total_grade +=grades[i]
}
let average = total_grade/grades.length;
console.log("total number of grades = ", total_grade);
console.log("the average of grades equel " , average);

if(average >= 90){
    console.log("Excellent");
}else if(average>=75){
    console.log("Very Good")
}else if(average>=60){
    console.log("Good")
}else{
    console.log("Failed")
}

let subject_number = parseInt(prompt("enter a subject number(1,2 or 3)"));
switch (subject_number){
    case(1):
    console.log(`Math : ${grades[0]}`);
    break;
    case(2):
    console.log(`Science :${grades[1]}`);
    break
    case(3):
    console.log(`English : ${grades[2]}`);
    default:
        console.log("not valid number")
}

for(let j=0 ;j<grades.length;j++){
    console.log(`grade equel ${j+1}: ${grades[j]}`)
}

function TotalGrade(grades){
    let sum=0;
    for(let i=0;i<grades.length;i++){
        sum +=grades[i]
    }
    console.log(`sum equel ${sum}`)
    return sum;
    
}
let Average = (grades)=>{
    let avg=TotalGrade(grades)/grades.length
    console.log(`Avrege equel ${avg}`)
    return avg;
    

}

let num2 =10
while(num2<10){
    console.log("done")
}

do{
    console.log("done");

}while(num2<10)

let Array = [1,2,3,4,5,6];
let sumArray=0;
for(let k=0 ;k<Array.length;k++){
    sumArray +=Array[k];
}
console.log(`sum using for loop : ${sumArray}`);
let i=0
while(i<Array.length){
    sumArray +=Array[i];

}
console.log(`sum using while loop : ${sumArray}`)