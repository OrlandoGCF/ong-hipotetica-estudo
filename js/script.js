const app = document.querySelector("#app");





function validarCampo(campo) {

    const mensagem = campo.nextElementSibling;

    if (campo.value.trim() === "") {

        if (campo.required) {
            campo.classList.add("erro");
            campo.classList.remove("sucesso");
            mensagem.textContent = "Este campo é obrigatório.";
            return false;
        }

        campo.classList.remove("erro");
        campo.classList.remove("sucesso");
        mensagem.textContent = "";
        return true;
    }

    if (!campo.checkValidity()) {

        campo.classList.add("erro");
        campo.classList.remove("sucesso");
        mensagem.textContent = "Formato inválido.";
        return false;
    }

    campo.classList.add("sucesso");
    campo.classList.remove("erro");
    mensagem.textContent = "";

    return true;
}




function carregarCadastros() {

    const historico = document.querySelector("#historico-cadastros");

    if (!historico) {
        return;
    }

    const cadastros =
        JSON.parse(localStorage.getItem("cadastros")) || [];

    if (cadastros.length === 0) {
        historico.textContent = "Nenhum cadastro realizado ainda.";
        return;
    }

    historico.innerHTML = `
        <h3>Cadastros realizados</h3>
        <ul>
            ${cadastros.map(cadastro => `
                <li>${cadastro.nome}</li>
            `).join("")}
        </ul>
    `;
}

function salvarCadastro(formulario) {

    const cadastro = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        cpf: formulario.cpf.value,
        telefone: formulario.telefone.value,
        cep: formulario.cep.value,
        endereco: formulario.endereco.value,
        complemento: formulario.complemento.value,
        estado: formulario.estado.value
    };

    let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

    cadastros.push(cadastro);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));
    carregarCadastros()
}


window.addEventListener("hashchange", navegar);

window.addEventListener("submit", function(event) {

    event.preventDefault();

    const formulario = event.target;

    const campos = formulario.querySelectorAll("input, select");

    let formularioValido = true;

    campos.forEach(function(campo) {

        if (!validarCampo(campo)) {
            formularioValido = false;
        }

    });

    if (!formularioValido) {
        return;
    }
    salvarCadastro(formulario);

    const alerta = document.createElement("div");

    alerta.classList.add("alerta", "alerta-sucesso");

    alerta.textContent = "Cadastro realizado com sucesso!";

    formulario.prepend(alerta);

});




window.addEventListener("input", function(event) {

    if (event.target.matches("input, select")) {
        validarCampo(event.target);
    }

});


function navegar() {

    let rota = window.location.hash.substring(1);

    if (!paginas[rota]) {
        rota = "inicio";
    }

    app.innerHTML = paginas[rota];
    
    if (rota === "projetos") {
        const lista = document.querySelector("#lista-projetos");

        projetos.forEach(projeto => {
            lista.innerHTML += criarProjeto(projeto);
        });
    }

    if (rota === "cadastro") {
        carregarCadastros();
    }

}

navegar();




  