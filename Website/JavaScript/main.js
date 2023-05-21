let codingButton = document.getElementById('codingButton');
let expirienceScore = document.getElementById('experienceScore')
let clicksScore = 0;

codingButton.addEventListener('click', function() {
    clicksScore++;
    expirienceScore.textContent="Click:"+clicksScore;
})