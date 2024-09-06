function pesquisar() {
        let section = document.getElementById("resultados-pesquisa");
        
        

        // Strings vazias para armazenar resultados
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let desenvolvedor = "";
        let genero = "";
        let tags = "";

        let campoPesquisa = document.getElementById("campo-pesquisa").value
        console.log(campoPesquisa);
        
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            desenvolvedor = dado.desenvolvedor.toLowerCase()
            genero = dado.genero.toLowerCase()
            tags = dado.tags.toLowerCase()

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || desenvolvedor.includes(campoPesquisa) || genero.includes(campoPesquisa)) {  
                resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="desenvolvedor">${dado.desenvolvedor}</p>
                <a target="_blank" href=${dado.link}>Steam</a>
            </div>
        `;
        }
        if (campoPesquisa == "") {
            section.innerHTML = "<p>Nada foi encontrado. Adicione um filtro</p>"
            return
        }

        if (campoPesquisa != titulo || descricao || tags || desenvolvedor || genero) {
            section.innerHTML = "<p>Nada foi encontrado</p>"
        }

    campoPesquisa = campoPesquisa.toLowerCase();
    section.innerHTML = resultados;
}
}
