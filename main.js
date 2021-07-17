Student_array=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    var name5=document.getElementById("student5").value;
    Student_array.push(name1);
    Student_array.push(name2);
    Student_array.push(name3);
    Student_array.push(name4);
    Student_array.push(name5);
    console.log(Student_array);
    document.getElementById("display").innerHTML=Student_array;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
    Student_array.sort();
    console.log(Student_array);
    document.getElementById("display").innerHTML=Student_array; 
}