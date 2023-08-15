// { calculate } import { Console } from 'console';
// import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

// Récuperation des élement html
const input = document.getElementById('input');
const calcul = document.getElementById('calcul');
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
 
// déclaration des variables de calcul
let btnCourant = "";
let operCourant = "";
let calculCourant = "";

// ajouts des évenements aux variables stocké
buttons.forEach(button => {
    button.addEventListener("click", () => {
        input.value += button.textContent;
    })
});

resetBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    input.value = ''; 
    calculHistoric.textContent = "";
});

clearBtn.addEventListener("click", function() {
    if(btnCourant.length > 0){
        btnCourant = btnCourant.slice(0, -1)
        input.value = btnCourant;
    }
})
plusmoins.addEventListener("click", function(event) {
    event.preventDefault();
    btnCourant = (parseFloat(btnCourant) * -1).toString();
    input.value = btnCourant;
    calculHistoric.textContent = btnCourant;
});

percentage.addEventListener("click", function(event) {
    event.preventDefault();
    btnCourant = (parseFloat(btnCourant) / 100).toString();
    input.value = btnCourant
    calculHistoric.textContent = btnCourant;
});

const dot = document.querySelector('.dot');
dot.addEventListener('click', function() {
    if(!btnCourant.includes('.')) {
        btnCourant += '.';
        input.value = btnCourant;
    };
})

dividebyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if(btnCourant !== ""){
        calculCourant += "" + operCourant + "" + btnCourant;
        operCourant = "/";
        calculHistoric.textContent = btnCourant;
        btnCourant = "";
    }
});

minusBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if(btnCourant !== "") {
        calculCourant += "" + operCourant + "" + btnCourant;
        operCourant = "-"
        calculHistoric.textContent = btnCourant;
    }
});

plusBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if(btnCourant !== "") {
        calculCourant += "" + operCourant + "" + btnCourant;
        operCourant = "+"
        calculHistoric.textContent = btnCourant;
        btnCourant = ""
    }
});

timesBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if(btnCourant !== "") {
        calculCourant += "" + operCourant + "" + btnCourant;
        operCourant = "*"
        calculHistoric.textContent = btnCourant;
        btnCourant = ""
    }
});

equalsBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if(btnCourant !== "" && operCourant !== "") {
        calculCourant += "" + operCourant + "" + btnCourant;
        calculHistoric.textContent = calculCourant + "=";
        let resultat;
        switch(operCourant){
            case "+":
                resultat = eval(calculCourant);
            break;
            case "-":
                resultat = eval(calculCourant);
            break;
            case "*":
                resultat = eval(calculCourant);
            break;
            case "/":
                resultat = eval(calculCourant);
            break;
            default:
                break;  
         }
         input.value = resultat.toString();
         btnCourant = resultat.toString();
         operCourant = "";
         calculCourant = "";
    }
})









