// Crie uma função que recebew como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o salvo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100 = Lendário
//Se vitórias for maior ou igual a 101 = Imortal

function calcula_nivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
    let limites = [10, 20, 50, 80, 90, 100, Infinity];
    let nivel = "";
  
    for (let i = 0; i < limites.length; i++) {
      if (vitorias <= limites[i]) {
        nivel = niveis[i];
        break;
      }
    }
    
    return [saldo, nivel];
  }
