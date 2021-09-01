// Média aritmética.
// Soma de todos os elementos(Todas as notas bimestrais), dividindo-se pelo número delas mesmas.

var inputnota1 = document.getElementById("nota1");
var inputnota2 = document.getElementById("nota2");
var inputnota3 = document.getElementById("nota3");
var inputnota4 = document.getElementById("nota4");

var resultado = document.getElementById("resultado");

function calcular(){

                var bimestreum = inputnota1.value;
                var bimestredois = inputnota2.value;
                var bimestretres = inputnota3.value;
                var bimestrequatro = inputnota4.value;

                var somanotas = (bimestreum + bimestredois + bimestretres +bimestrequatro) / 4;

                console.log(somanotas);

                resultado.innerHTML`<p> Sua Média é , ${somanotas} .</p>`
}