// { calculate } import { Console } from 'console';
// import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// Récuperation des élement html
const input = document.getElementById('input');
const calcul = document.getElementById('calcul');
// const buttons = document.querySelectorAll('button');
const resetBtn = document.getElementById('reset');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const plusBtn = document.getElementById('plus'); 
const buttons = document.querySelectorAll('.numpad');
const minusBtn = document.getElementById('minus');
const timesBtn = document.getElementById('times');
const dividebyBtn = document.getElementById('divideby');
const plusmoins = document.getElementById("plusoumoins");
const percentage = document.getElementById('percentage');
 
buttons.forEach(button => {
    button.addEventListener("click", () => {
        input.value += button.textContent;
    })
});

resetBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    input.value = ''; 
});






