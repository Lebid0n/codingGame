let codingButton = document.getElementById('codingButton');
let expirienceScore = document.getElementById('experienceScore')
let clicksScore = 0;

document.getElementById('codingButton').onclick = function() {
    clicksScore++;
    document.querySelector('.experienceScore').innerHTML = clicksScore;
}