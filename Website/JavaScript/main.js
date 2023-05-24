let codingButton = document.getElementById('codingButton');
let expirienceScore = document.getElementById('experienceScore');
let conventor = document.getElementById('conventor');
let soldClick = document.getElementById('money');
let shop1Button = document.getElementById('shop1Button');
let clicksScore = 0;
let money = 0;
let multiplicator = 1;

shop1Button.addEventListener('click', function() {
  if (money < 100) {
      alert('У вас недостаток средств.')
    } else {
      money = money - 100;
      ++multiplicator;
    }
})
codingButton.addEventListener('click', function() {
    clicksScore = clicksScore + multiplicator;
    expirienceScore.textContent="experience:"+clicksScore;
})
conventor.addEventListener('click', function() {
  money = money + clicksScore;
  clicksScore = clicksScore - clicksScore;
  soldClick.textContent="money:"+money;
})
function myImg() {
  let elem = document.getElementById('img_1'); 
  let style = getComputedStyle(elem); 
  if (style.display === 'none') {
    document.getElementById('img_1').style.display='block';
  } else if (style.display !== 'none') {
    document.getElementById('img_1').style.display='none';
  }
}