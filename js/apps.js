import { paginas } from "./paginas.js";

import { carregarProjetos } from "./projetos.js";

import {
    configurarFormulario,
    mostrarHistorico
} from "./formulario.js";


const app = document.querySelector("#app");


function navegar() {

    let rota =
        window.location.hash.substring(1);

    if (!paginas[rota]) {
        rota = "inicio";
    }

    app.innerHTML = paginas[rota];


    if (rota === "projetos") {
        carregarProjetos();
    }


    if (rota === "cadastro") {
        configurarFormulario();
        mostrarHistorico();
    }
}


window.addEventListener(
    "hashchange",
    navegar
);

navegar();

export { navegar };