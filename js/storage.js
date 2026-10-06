

function salvarCadastro(cadastro) {

    const cadastros =
        JSON.parse(localStorage.getItem("cadastro")) || [];

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastro",
        JSON.stringify(cadastros)
    );
}


function carregarCadastros() {

    return JSON.parse(
        localStorage.getItem("cadastro")
    ) || [];
}


export {
    salvarCadastro,
    carregarCadastros
};