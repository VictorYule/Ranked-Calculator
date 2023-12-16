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
