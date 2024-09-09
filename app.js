function pesquisar() {
        //Pega a section no HTML pelo ID e coloca na variável
        let section = document.getElementById("resultados-pesquisa");
        // Strings vazias para armazenar resultados em variáveis
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let desenvolvedor = "";
        let genero = "";
        let tags = "";
        // Pega o valor dentro do campo de pesquisa e coloca na variável
        let campoPesquisa = document.getElementById("campo-pesquisa").value
        console.log(campoPesquisa);
        // Define uma regra geral para cada dado do documento
        for (let dado of dados) {
            // Transforma todos os dados abaixo em letras minúsculas
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            desenvolvedor = dado.desenvolvedor.toLowerCase()
            genero = dado.genero.toLowerCase()
            tags = dado.tags.toLowerCase()
            // Filtra as pesquisas pelos campos
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || desenvolvedor.includes(campoPesquisa) || genero.includes(campoPesquisa)) {  
            // Define o valor da variável resultados em código HTML várias vezes
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="desenvolvedor">${dado.desenvolvedor}</p>
                    <a target="_blank" href=${dado.link}>Steam</a>
                </div>
            `;
        }
        // Define que se o campo estiver vazio, uma mensagem será exibida
        if (campoPesquisa == "") {
            section.innerHTML = "<p>Nada foi encontrado. Adicione um filtro</p>"
            return
        }
        // Define uma mensagem para caso nada seja encontrado
        if (campoPesquisa != titulo || descricao || tags || desenvolvedor || genero) {
            section.innerHTML = "<p>Nada foi encontrado</p>"
        }
    // Transforma o valor inserido no campo de pesquisa em letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
    // Sobrepõe o valor da variável resultados na variável section
    section.innerHTML = resultados;
}
}
