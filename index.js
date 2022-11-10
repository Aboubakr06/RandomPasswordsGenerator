const characters =["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0","1","2",
"3","4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn1El = document.getElementById("btn1");
let btn2El = document.getElementById("btn2");


function password() {
       btn1El.textContent = ""
       btn2El.textContent = ""
for (let i = 0 ; i < 15 ; i++){
       let b1 = Math.floor(Math.random() * characters.length)
       let b2 = Math.floor(Math.random() * characters.length)
       btn1El.textContent += characters[b1] 
       btn2El.textContent += characters[b2]
}  
   
}
function passwordcopy1() {
       navigator.clipboard.writeText(btn1El.textContent);
       alert("The password is copied to the clipboard");
}  

function passwordcopy2() {
       navigator.clipboard.writeText(btn2El.textContent);
       alert("The password is copied to the clipboard")
}  



