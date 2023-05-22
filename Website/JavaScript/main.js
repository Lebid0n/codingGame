let codingButton = document.getElementById('codingButton');
let expirienceScore = document.getElementById('experienceScore')
let clicksScore = 0;

codingButton.addEventListener('click', function() {
    clicksScore++;
    expirienceScore.textContent="experience:"+clicksScore;
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