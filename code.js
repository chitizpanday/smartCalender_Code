//display date and time in the web page
var dt=new Date();
document.getElementById('date-time').innerHTML=dt;

//reflect the user's input in the text area 
if (localStorage.getItem("label1")!==null)  
{document.getElementById ("label1").innerHTML =JSON.parse(localStorage.getItem("label1"))}


//set item in local storage
function saveData1(){
var text1 = document.getElementById ("label1").value;
var jsonText1 =JSON.stringify(text1)
localStorage.setItem ("label1", jsonText1);
}

if (localStorage.getItem("label2")!==null)  
{document.getElementById ("label2").innerHTML =JSON.parse(localStorage.getItem("label2"))}


function saveData2(){
var text2=document.getElementById("label2").value;
var jsontext2 = JSON.stringify(text2);
localStorage.setItem ("label2", jsontext2);
}


if (localStorage.getItem("label3")!==null){
    document.getElementById("label3").innerHTML = JSON.parse(localStorage.getItem("label3"))}
function saveData3(){
 var text3=document.getElementById("label3").value;
 var jsontext3=JSON.stringify (text3);
 localStorage.setItem ("label3", jsontext3);
}

if (localStorage.getItem("label4")!==null){
    document.getElementById("label4").innerHTML = JSON.parse(localStorage.getItem("label4"))}
function saveData4(){
var text4=document.getElementById("label4").value;
var jsontext4 = JSON.stringify (text4);
localStorage.setItem ("label4", jsontext4);
 }

 if (localStorage.getItem("label5")!==null){
    document.getElementById("label5").innerHTML = JSON.parse(localStorage.getItem("label5"))}
function saveData5(){
 var text5=document.getElementById("label5").value;
 var jsontext5= JSON.stringify(text5);
 localStorage.setItem ("label5", jsontext5);
 }
            
