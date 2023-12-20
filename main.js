function calcularNivel(vitorias, derrotas) {
 
  const saldoVitorias = vitorias - derrotas;

  
  if (vitorias < 10) {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Ferro.`;
  } else if (vitorias >= 11 && vitorias <= 20) {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Bronze.`;
  } else if (vitorias >= 21 && vitorias <= 50) {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Prata.`;
  } else if (vitorias >= 51 && vitorias <= 80) {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Ouro.`;
  } else if (vitorias >= 81 && vitorias <= 90) {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Diamante.`;
  } else if (vitorias >= 91 && vitorias <= 100) {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Lendário.`;
  } else {
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de Imortal.`;
  }
}


const resultado = calcularNivel(60, 20);
console.log(resultado);