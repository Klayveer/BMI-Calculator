function calcularIMC() {
    var peso = document.getElementById('peso').value 
    var altura = document.getElementById('altura').value
    
    if(peso && altura) {
        var imc = peso / (altura * altura);
        var resultado = "";

        if(imc < 18.5) {
            resultado = "abaixo do peso";
        } else if(imc >= 18.5 && imc < 25) {
            resultado = "Peso normal";
        } else if(imc >= 25 && imc < 30) {
            resultado = "sobrepeso";
        } else {
            resultado = "obesidade"
        }
        
        document.getElementById('resultado').innerHTML = `<p class="text-lg font-semibold mt-2">Seu IMC é ${imc.toFixed(2)} - ${resultado} </p>` 
    } else {
        document.getElementById('resultado').innerHTML = `<p class="text-lg font-semibold mt-2">preencha os dados</p>`
    }
}