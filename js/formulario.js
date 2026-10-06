import {
    salvarCadastro,
    carregarCadastros
} from "./storage.js";


function validarCampo(campo) {

    const mensagem = campo.nextElementSibling;

    if (campo.value.trim() === "") {

        if (campo.required) {

            campo.classList.add("erro");
            campo.classList.remove("sucesso");

            if (mensagem) {
                mensagem.textContent =
                    "Este campo é obrigatório.";
            }

            return false;
        }

        campo.classList.remove("erro");
        campo.classList.remove("sucesso");

        if (mensagem) {
            mensagem.textContent = "";
        }

        return true;
    }

    if (!campo.checkValidity()) {

        campo.classList.add("erro");
        campo.classList.remove("sucesso");

        if (mensagem) {
            mensagem.textContent = "Formato inválido.";
        }

        return false;
    }

    campo.classList.add("sucesso");
    campo.classList.remove("erro");

    if (mensagem) {
        mensagem.textContent = "";
    }

    return true;
}


function obterDadosFormulario(formulario) {

    return {
        nome: formulario.nome.value,
        email: formulario.email.value,
        cpf: formulario.cpf.value,
        telefone: formulario.telefone.value,
        cep: formulario.cep.value,
        endereco: formulario.endereco.value,
        complemento: formulario.complemento.value,
        estado: formulario.estado.value
    };
}


function configurarFormulario() {

    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    const campos =
        formulario.querySelectorAll("input, select");


    campos.forEach(function(campo) {

        campo.addEventListener("input", function() {
            validarCampo(campo);
        });

    });


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        let formularioValido = true;

        campos.forEach(function(campo) {

            if (!validarCampo(campo)) {
                formularioValido = false;
            }

        });

        if (!formularioValido) {
            return;
        }


        const cadastro =
            obterDadosFormulario(formulario);

        salvarCadastro(cadastro);


        const alerta =
            document.createElement("div");

        alerta.classList.add(
            "alerta",
            "alerta-sucesso"
        );

        alerta.textContent =
            "Cadastro realizado com sucesso!";

        formulario.prepend(alerta);

    });
}

function mostrarHistorico() {

    const elemento = document.querySelector("#historico-cadastros");
    if (!elemento) {
        return;
    }

    const cadastros = carregarCadastros();

    if (cadastros.length === 0) {
        cadastros.textContent = "Nenhum cadastro realizado ainda.";
        return;
    }

    elemento.textContent =`
        <h3>Cadastros realizados</h3>
        <ul>
            ${cadastros.map(cadastro => `
                <li>${cadastro.nome}</li>
            `).join("")}
        </ul>
    `;
    
}

export {
    configurarFormulario,
    mostrarHistorico
};