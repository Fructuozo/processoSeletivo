function somaMultiplos(n) {
    let soma = 0;
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
    return soma;
  }

  function somar() {
    const inputNumero = document.getElementById('numero');
    const numero = parseInt(inputNumero.value);

    const resultado = somaMultiplos(numero);

    const resultadoElemento = document.getElementById('resultado');
    
    resultadoElemento.textContent = `O somatório dos múltiplos de 3 ou 5 menores que ${numero} é: ${resultado}`;
  }
  
  /* Exemplos:
  console.log(somaMultiplos(10));
  console.log(somaMultiplos(11));
  */