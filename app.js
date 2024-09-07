function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Digite um card gamer</p>" 
        return
    }

     campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = ""; 
    let titulo ="";
    let descricao ="";
    let tags ="";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
          // então, faça...

    if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)) {
        // cria um novo elemento 
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
 }

 if(!resultados){
   resultados = "<p>Nada foi encontrado</p>" 
 }
         


    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;

}








