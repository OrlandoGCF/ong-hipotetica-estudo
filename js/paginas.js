const paginas = {

    inicio: `
        <section id="sobre">
                <h1>Sobre a ONG</h1>

                <img src="../img/logo.jpg" style="max-height:200px;"
                    alt="Logo da ONG">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </section>

            <section id="contato">
                <h2>Contato</h2>

                <address>
                    <p><strong>Endereço:</strong> Rua hipotética, 100</p>
                    <p><strong>Telefone:</strong> (01) 2345-6789</p>
                    <p><strong>E-mail:</strong>
                        <a href="mailto:contato@ong.org.br">
                            contato@ong.org.br
                        </a>
                    </p>
                </address>
            </section>
    `,

    projetos: `
        <section id="projetos">
            <h1>Projetos</h1>
            <p>Conheça nossos projetos</p>
        </section>

        <div id="lista-projetos"></div>
    `,

    cadastro: `
        <div id="historico-cadastros"></div>
        <section>
            <h2>Componentes de feedback</h2>

            

            <h3>Badges</h3>

            <p>
                <span class="badge badge-projeto">
                    Projeto
                </span>

                <span class="badge badge-ativo">
                    Ativo
                </span>

                <span class="badge badge-pendente">
                    Pendente
                </span>
            </p>


            

            <h3>Alertas</h3>

            <div class="alerta alerta-sucesso">
                Cadastro realizado com sucesso!
            </div>

            <div class="alerta alerta-erro">
                Não foi possível realizar o cadastro.
            </div>

            <div class="alerta alerta-aviso">
                Este projeto está recebendo novos voluntários.
            </div>


           

            <h3>Toast</h3>

            <div class="toast">
                Seu cadastro foi enviado com sucesso.
            </div>


            

            <h3>Modal</h3>

            <div class="modal">
                <h2>Confirmação</h2>

                <p>
                    Deseja participar deste projeto como voluntário?
                </p>

                <button type="button">
                    Confirmar
                </button>
            </div>

        </section>
        
        <form action="#" method="post">

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required class="sucesso">
                <small class="mensagem-erro"></small>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required class="erro">
                <small class="mensagem-erro"></small>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}" required placeholder="000.000.000-00" title="Formato: 000.000.000-00">
                <small class="mensagem-erro"></small>

                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" pattern="\(?[0-9]{2}\)?[ ]?[0-9]{4,5}-?[0-9]{4}" placeholder="(00) 00000-0000" title="Formato: (00) 00000-0000">
                <small class="mensagem-erro"></small>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" pattern="[0-9]{5}-?[0-9]{3}" required placeholder="00000-000" title="Formato: 00000-000">
                <small class="mensagem-erro"></small>
                
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco">
                <small class="mensagem-erro"></small>

                <label for="complemento">Complemento:</label>
                <input type="text" id="complemento" name="complemento">
                <small class="mensagem-erro"></small>

                <label for="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    
                </select>
                <small class="mensagem-erro"></small>
            </fieldset>

            <button type="submit">Cadastrar</button>
            <button type="button" disabled>Cancelar</button>
        </form>
    `
};


export {paginas}