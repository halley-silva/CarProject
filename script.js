// Criar um mostrador de hora e exibir ele



const hora = new Date().getHours(); // pegar somete a hora

console.log("CArregando")

let mensagem;

if (hora < 12) {
    mensagem = "Bom dia";
} else if (hora < 18) {
    mensagem = "Boa tarde";
} else {
    mensagem = "Boa noite";
}

let lista = [
    {
        hora: mensagem,
        nome: "Halley"
    }
];

// Pegar a DIV pai
const começo = document.getElementById("começoD");

// Percorrer a lista de objetos
lista.forEach(iten => {

    const mensagem = document.createElement("div") // Criar o elemento no HTML

    mensagem.classList.add("boas_vindas") // Adiconar uma classe nela

    // Adicionar os elementos no HTML
    mensagem.innerHTML = `

        <h2 id="visitante">${iten.hora} ${iten.nome}!</h2>

        <p>Nesta parte estão as informações sobre seus carros.</p>
    
    
    `

    começo.appendChild(mensagem)


});


//////////////// Começar a troca de pagina

const pagina = document.querySelectorAll(".pagina");

function trocarPagina(nome) {

    pagina.forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    document
        .querySelector(`.${nome}`)
        .classList.add("ativa");
}
