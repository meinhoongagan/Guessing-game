const input = document.getElementById("input");
const btn = document.getElementById("btn");
let status2 = document.getElementById("status");
let attempts = document.getElementById("count");
const ans = Math.floor(Math.random()*100)+1;
console.log(ans);
let count =0;
btn.addEventListener("click",()=>{
    count++;
    if(input.value == ans){
        status2.textContent="Congratulation You Guess The Correct Number";
        attempts.textContent=`Your attempt ${count}`;
    }else if(input.value<ans){
        status2.textContent="Your Answere is lower ";
        attempts.textContent=`Your attempt ${count}`;
    }else{
        status2.textContent="Your Answere is higher";
        attempts.textContent=`Your attempt ${count}`;
    }
});