// { calculate } import { Console } from 'console';
// import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// Let's retrieve the html elements
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const historiqueClc = document.querySelector('p');

// variable declaration for calculation
let calcul = '';
let histiriCalcul = "";
let operateur = "";
var verifSigne = false;

// add events and functionality

//  to prevent entering a number using the keyboard
 input.addEventListener('keydown', (event) => {
  event.preventDefault();
 });
// to hide the flashing bar in the input element
 input.style.caretColor = 'transparent';

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
                    viewHist += btnValue;
                    operateur += btnValue;
                } else {
                    input.value = '';
                    viewHist = ""
                    calcul = '';
                    input.value += btnValue;
                    viewHist += btnValue;
                    calcul += btnValue;
                    operateur += btnValue;
                }
            }

        } else {            
            operateur += btnValue;
            if (input.value !== '') {
                switch (btnValue) {
                    case '+':
                        input.value = '';
                        verifSigne = true;
                        if (!historiqueClc.textContent.includes('=')) {
                            historiqueClc.textContent = viewHist + " + "
                        } else {
                            historiqueClc.textContent = calcul + ' + ';
                        }
                        viewHist = "";
                        calcul += '+';
                        event.preventDefault();
                    break;
                    case '-':
                        verifSigne = true;
                        input.value = '';
                        if (!historiqueClc.textContent.includes('=')) {
                            historiqueClc.textContent = viewHist +  " - "
                        } else {
                            historiqueClc.textContent = calcul + ' - '
                        }
                        viewHist = "";
                        calcul += '-';
                        event.preventDefault();
                    break;
                    case '×':
                        verifSigne = true;
                        input.value = '';
                        if (!historiqueClc.textContent.includes('=')) {
                            historiqueClc.textContent = viewHist + " × "
                        } else {
                            historiqueClc.textContent = calcul + ' * '
                        }
                        viewHist = "";
                        calcul += '*';
                        event.preventDefault();
                    break;
                    case '÷':
                        event.preventDefault();
                        verifSigne = true;
                        inputcontenairs.value = '';
                        if (!historiqueClc.textContent.includes('=')) {
                                historiqueClc.textContent = viewHist + " ÷ "
                        } else {
                            historiqueClc.textContent = calcul + ' / '
                        }
                            viewHist = "";
                            calcul += '/';
                    break;
                    case '%':
                        input.value = eval(calcul) / 100;
                        historiqueClc.textContent = input.value + " % "
                        event.preventDefault();
                    break;

                    case '=':
                        if (!historiqueClc.textContent.includes('=')) {
                            if(!verifSigne) {
                                historiqueClc.textContent = "";
                            }else{
                                historiqueClc.textContent += viewHist + " = "
                                input.value = eval(calcul);
                                calcul = eval(calcul);
                            }
                            event.preventDefault();
                    break;
                        } else {
                            const val = eval(calcul);
                            calcul = eval(val + calcul);
                            break;
                        }
                    case 'AC':
                        input.value = '';
                        historiqueClc.textContent = "";
                        calcul = '';
                        viewHist = "";
                        event.preventDefault();
                    break;
                    case 'C':
                        viewHist = viewHist.slice(0, -1);
                        input.value = input.value.slice(0, -1);
                        calcul = calcul.slice(0, -1);
                        event.preventDefault();
                    break;
                    case '+/-':
                        input.value = -input.value;
                        calcul = -calcul;
                        event.preventDefault();
                    break;

                    case '.':

                        if (!input.value.includes('.')) {
                            input.value += '.';
                            viewHist += ".";
                            calcul += '.';
                        }
                }
            } else if (btnValue === 'AC') {
                input.value = '';
                historiqueClc.textContent = "";
                calcul = '';
                viewHist = "";
            } else if (btnValue >= '0' && btnValue <= '9' && historiqueClc.textContent.includes('=')) {
                viewHist = "";
                calcul = eval(calcul);
                historiqueClc.textContent = calcul;

            }
            else if (input.textContent === "" && isNaN(historiqueClc.textContent.slice(-1))){
                    historiqueClc.textContent = historiqueClc.textContent.slice(0, -1) + "+";
                    operateur = operateur.slice(0, -1) + "+";
                    viewHist = "";
                    }
        }
    });
});










