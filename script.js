let user_score = document.getElementById('user-score');
let computer_score = document.getElementById('computer-score');
let results = document.getElementById('results');

let r = document.querySelector('.fa-hand-rock');
let p = document.querySelector('.fa-hand-paper');
let s = document.querySelector('.fa-hand-scissors');

let choices = ['r', 'p', 's']
let uScore = 0;
let cScore = 0;
user_score.innerHTML = uScore;
computer_score.innerHTML = cScore;
results.innerHTML = 'Results';
r.addEventListener('click', rock);
p.addEventListener('click', paper);
s.addEventListener('click', scissors);

function rock() {
    let comChoice = computer_choice();
    switch(comChoice){
        case 'r':
            results.innerHTML = 'Draw';
            break;
        case 's':
            uScore++
            user_score.innerHTML = uScore;
            results.innerHTML = 'User wins';
            break;
        case 'p':
            cScore++
            computer_score.innerHTML = cScore;
            results.innerHTML = 'Computer Wins';
            break;
    }
}
function paper() {
    let comChoice = computer_choice();
    switch(comChoice){
        case 'p':
            results.innerHTML = 'Draw';
            break;
        case 'r':
            uScore++
            user_score.innerHTML = uScore;
            results.innerHTML = 'User wins';
            break;
        case 's':
            cScore++
            computer_score.innerHTML = cScore;
            results.innerHTML = 'Computer Wins';
            break;
    }
}
function scissors() {
    let comChoice = computer_choice();
    switch(comChoice){
        case 's':
            results.innerHTML = 'Draw';
            break;
        case 'p':
            uScore++
            user_score.innerHTML = uScore;
            results.innerHTML = 'User wins';
            break;
        case 'r':
            cScore++
            computer_score.innerHTML = cScore;
            results.innerHTML = 'Computer Wins';
            break;
    }
}

function computer_choice() {
    let num = Math.floor(Math.random() * 3);
    console.log('computer: ', choices[num]);
    let choice = choices[num];
    return choice
}
