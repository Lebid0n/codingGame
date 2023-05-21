let codingButton = document.getElementById(codingButton);
let expirience = document.getElementById(expirience);
let clicksScore = 0;

codingButton.addEventListener('click', function() {
    ++clicksScore;
    expirience.textContent = 'experience:' + clicksScore;
});