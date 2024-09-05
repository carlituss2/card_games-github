function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        // Concatena o HTML de um item de resultado à string 'resultados'
        // Utiliza template literals para facilitar a construção da string
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.wiki} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
}










