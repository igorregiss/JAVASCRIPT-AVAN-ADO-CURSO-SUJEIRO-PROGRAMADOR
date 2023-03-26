var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault(); // PREVINIR EXCLUIR DADOS DO FORMULARIO
    peso = document.getElementById('peso').value; // PEGANDO DADO PESO
    altura = document.getElementById('altura').value; // PEGANDO DADO ALTURA
    
    imc = peso / (altura * altura);
    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado você está muito abaixo do peso!!!'
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está abaixo do peso!!!'    
    }else if(imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está no peso ideal!!!'    
    }
    else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está acima do peso!!!'    
    }else if(imc >= 30){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado você está obeso!!!'    
    }

    document.getElementById('peso').value = ''; // LIMPANDO INPUT
    document.getElementById('altura').value = '';
}