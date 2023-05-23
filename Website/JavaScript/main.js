let codingButton = document.getElementById('codingButton');
let expirienceScore = document.getElementById('experienceScore')
let conventor = document.getElementById('conventor');
let soldClick = document.getElementById('money')
let clicksScore = 0;
let money = 0;

codingButton.addEventListener('click', function() {
    clicksScore++;
    expirienceScore.textContent="experience:"+clicksScore;
})
conventor.addEventListener('click', function() {
  money = money + clicksScore;
  clicksScore = clicksScore - clicksScore;
  money.textContent="money:"+money;
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