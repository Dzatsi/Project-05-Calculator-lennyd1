// { calculate } import { Console } from 'console';
// import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// Récuperons les élement html
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const historiqueClc = document.querySelector('p');

// déclaration variable pour calcul
let calcul = '';
let viewHist = "";
let operateur = "";
var verifSigne = false;

// add events
buttons.forEach(button => {
    button.addEventListener('click', event => {
        const btnValue = button.textContent;

        if (btnValue >= '0' && btnValue <= '9') {
            if (input.value === '0' && btnValue === '0') {
                input.value = input.value;
                viewHist = btnValue;
                verifSigne = false;
            } else if(input.value === '0'){
                input.value = btnValue;
                viewHist = btnValue;
            } else{

                if (!historiqueClc.textContent.includes('=')) {
                    calcul += btnValue;
                    input.value += btnValue;
                    viewHis.value += btnValue;
                    operateur += btnValue;
                } else {
                    input.value = '';
                    viewHist = ""
                    calcul = '';
                    input.value += btnValue;
                    viewHist += btnValue;
                    calcul += btnValue;
                    operateur += buttonValue;
                }
            }












