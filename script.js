const countBtn = document.querySelector(".countBtn button");
const resetBtn = document.querySelector(".resetBtn button");
let countNum = document.querySelector(".countNum h1");

countBtn.addEventListener("click", countUp);
resetBtn.addEventListener("click", reset);


function countUp(){
  countNum.innerHTML++;
}

function reset(){
  countNum.innerHTML = 0;
  countNums.innerHTML = 0;
}
const countBtns = document.querySelector(".countBtns button");
const resetBtns = document.querySelector(".resetBtns button");
let countNums = document.querySelector(".countNums h1");

countBtns.addEventListener("click", count1Up);



function count1Up(){
  countNums.innerHTML++;
}

