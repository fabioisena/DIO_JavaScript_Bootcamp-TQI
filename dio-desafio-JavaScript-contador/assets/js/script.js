/*console.log("hello world");*/
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentNumber2 = 0;
var mudaCor = document.getElementsByTagName('span')[0]

function increment(){
     
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        mudaCor.style.color = 'blue';        
    }
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <0){
        mudaCor.style.color = 'red';        
    }

}

function decrement2(){
    if (currentNumber2 <= 0) {
        alert("Números negativos não são permitidos");
    } else {
        currentNumber2 = currentNumber2 -1;
        currentNumberWrapper2.innerHTML = currentNumber2;
    }
    
}
function increment2(){
    if (currentNumber2 >=10) {
        alert("não é possivel ir além de 10");
        return false;
    } else {
        currentNumber2 = currentNumber2 +1;
        currentNumberWrapper2.innerHTML = currentNumber2;    
    }
    
}
function soma(a, b) {
    return a + b;
}