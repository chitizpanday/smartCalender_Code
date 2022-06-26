var dt=new Date();
document.getElementById('date-time').innerHTML=dt;

//set item in local storage
function saveData1(){

text1 = document.getElementById ("label1").value;
localStorage.setItem ("label1",text1);
}

function saveData2(){
text2=document.getElementById("label2").value;
localStorage.setItem ("label2", text2);
}

function saveData3(){
 text3=document.getElementById("label3").value;
 localStorage.setItem ("label2", text3);
 }

function saveData4(){
text4=document.getElementById("label4").value;
localStorage.setItem ("label4", text4);
 }
 function saveData5(){
 text5=document.getElementById("label5").value;
 localStorage.setItem ("label5", text5);
 }
            
