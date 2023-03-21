function First(){
    document.getElementById("seat").style.visibility = 'visible'; 
    document.getElementById("seat").style.opacity = '1';
    document.getElementById("pass-form").style.display = 'none';
   
}
function goNext(){
    document.getElementById("pass-form").style.display = 'contents';
    document.getElementById("pass-form").style.visibility = 'visible'; 
    document.getElementById("pass-form").style.opacity = '1';
    document.getElementById("seat").style.visibility = 'hidden';
    document.getElementById("seat").style.opacity = '0';
    }
let seatClick=document.querySelectorAll(".sel");
let count=0;
 for(let i=0;i<seatClick.length;i++){
 seatClick[i].addEventListener("click", function() {
     count =count+ 1;
     console.log(count);
   });
 }
let seatcolor=0;
for(let i=0;i<seatClick.length;i++){
    if (seatClick[i].style.backgroundColor=='red'){
        seatcolor+=1;
        console.log(seatcolor);
    }
    }

function passengerForm(){
    for(let i=0;i<count;i++){
        return document.getElementById("pass-form");
}