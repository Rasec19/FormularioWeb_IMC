
function calcular(){
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value;
    let saludo = document.querySelector("#nombre").value
    let parrafo = document.querySelector("#textarea")
    let estado = ""

    let imc = peso / Math.pow(altura,2);

    if(imc < 18.5) {
        estado = "Peso inferior a lo normal"
    } else if (imc >= 18.5 || imc <= 24.9){
        estado = "Peso normal"
    }else if (imc >= 25.0 || imc <= 29.9){
        estado = "Peso superior a lo normal"
    }else {
        estado = "Obesidad"
    }

    parrafo.innerHTML = "Hola " + saludo + " Su indice de masa corporal es: " + imc + " estado: " + estado
}