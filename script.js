// Criar um mostrador de hora e exibir ele

const hora = new Date().getHours(); // pegar somete a hora

let mensagem;

if (hora < 12) {
    mensagem = "Bom dia";
} else if (hora < 18) {
    mensagem = "Boa tarde";
} else {
    mensagem = "Boa noite";
}

