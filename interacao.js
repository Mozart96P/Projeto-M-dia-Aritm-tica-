// Média aritmética.
// Soma de todos os elementos(Todas as notas bimestrais), dividindo-se pelo número delas mesmas.

function calcular() {
    let inputnota1 = parseFloat(document.getElementById("nota1").value);
    let inputnota2 = parseFloat(document.getElementById("nota2").value);
    let inputnota3 = parseFloat(document.getElementById("nota3").value);
    let inputnota4 = parseFloat(document.getElementById("nota4").value);
    let resultado = document.getElementById("resultado");

    console.log(inputnota1)
    console.log(inputnota2)
    console.log(inputnota3)
    console.log(inputnota4)
   
    let somanotas = (inputnota1 + inputnota2 + inputnota3 + inputnota4) / 4;

    console.log(somanotas);
    
    resultado.innerHTML = `<p> A média do Zé é , ${somanotas} .</p>` 
}

