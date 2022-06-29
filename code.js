var dt=new Date();
document.getElementById('date-time').innerHTML=dt;

if (localStorage.getItem("label1")!==null)  
{document.getElementById ("label1").innerHTML =JSON.parse(localStorage.getItem("label1"))}


//set item in local storage
function saveData1(){

var text1 = document.getElementById ("label1").value;
var jsonText1 =JSON.stringify(text1)
localStorage.setItem ("label1", jsonText1);
}
// console.log(JSON.parse(localStorage.getItem("label1")));
// document.getElementById ("label1").innerHTML =JSON.parse(localStorage.getItem("label1"))
if (localStorage.getItem("label2")!==null)  
{document.getElementById ("label2").innerHTML =JSON.parse(localStorage.getItem("label2"))}

function saveData2(){
var text2=document.getElementById("label2").value;
var jsontext2 = JSON.stringify(text2);
localStorage.setItem ("label2", jsontext2);
}

function saveData3(){
 text3=document.getElementById("label3").value;
 localStorage.setItem ("label3", text3);
 }

function saveData4(){
text4=document.getElementById("label4").value;
localStorage.setItem ("label4", text4);
 }

function saveData5(){
 text5=document.getElementById("label5").value;
 localStorage.setItem ("label5", text5);
 }
            
