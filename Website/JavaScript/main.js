let codingButton = document.getElementById('codingButton');
let expirienceScore = document.getElementById('experienceScore');
let conventor = document.getElementById('conventor');
let soldClick = document.getElementById('money');
let shop1Button = document.getElementById('shop1Button');
let shop2Button = document.getElementById('shop2Button');
let clicksScore = 0;
let money = 0;
let multiplicator = 1;


function buyUpgrade(cost, multiplier) {
  if (money >= cost) {
    money -= cost;
    multiplicator += multiplier;
    document.getElementById('money').innerHTML = money;
    soldClick.textContent="money:"+money;
  } else {
    alert("Недостаточно опыта!");
  }
}
function buyUpgrade2(cost, multiplier) {
  if (money >= cost) {
    money -= cost;
    multiplicator += multiplier;
    document.getElementById('money').innerHTML = money;
    soldClick.textContent="money:"+money;
  } else {
    alert("Недостаточно опыта!");
  }
}
codingButton.addEventListener('click', function() {
    clicksScore = clicksScore + multiplicator;
    document.getElementById("experienceScore").innerHTML = clicksScore;
    expirienceScore.textContent="experience:"+clicksScore;
})
conventor.addEventListener('click', function() {
  money = money + clicksScore;
  clicksScore = clicksScore - clicksScore;
  soldClick.textContent="money:"+money;
  document.getElementById("experienceScore").innerHTML = clicksScore;
})
