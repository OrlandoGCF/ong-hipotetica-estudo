

const projetos = [
    {
        titulo : "Ações Voluntárias",
        subtitulo: "Ação em São Paulo em 02/2025",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        titulo: " Doações",
        subtitulo: "Campanha de doações",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                <ul>
                    <li>Arrecadação</li>
                    <li>Local</li>
                    <li>data</li>
                </ul>`
    }
];

function criarProjeto(projeto) {
    return `
        <section class="card-projeto">
            <h2>${projeto.subtitulo}</h2>
            <article>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        </section>
    `;
}

function carregarProjetos() {

    const lista = document.querySelector("#lista-projetos");

    if (!lista) {
        return;
    }

    projetos.forEach(function(projeto) {
        lista.innerHTML += criarProjeto(projeto);
    });
}

export {carregarProjetos};