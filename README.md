# ONG Esperança — Projeto de Desenvolvimento Web

Aplicação web front-end demonstrativa criada para praticar estruturação semântica, estilização responsiva, navegação entre telas e validação de formulários com JavaScript.

## Objetivo

Apresentar uma ONG fictícia, divulgar exemplos de projetos sociais e oferecer um formulário demonstrativo para cadastro de pessoas interessadas em voluntariado.

## Funcionalidades

- Página inicial com apresentação institucional.
- Seção de projetos sociais em cards.
- Formulário de interesse em voluntariado.
- Validação de campos obrigatórios, e-mail, telefone e consentimento.
- Mensagens de retorno para sucesso e erros de preenchimento.
- Persistência local dos cadastros usando `localStorage`.
- Menu adaptado para telas menores.
- Navegação por hash (`#inicio`, `#projetos`, `#cadastro`) sem recarregar a página.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, variáveis e media queries)
- JavaScript moderno com módulos ES
- Web Storage API (`localStorage`)

## Estrutura de pastas

```text
ong-esperanca/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── templates.js
    ├── formulario.js
    └── storage.js
```

## Como executar

Como o projeto utiliza módulos JavaScript (`type="module"`), execute-o por um servidor local. Uma opção simples é a extensão **Live Server** no Visual Studio Code:

1. Abra a pasta do projeto no VS Code.
2. Instale/ative a extensão Live Server.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

Também é possível iniciar um servidor local com Python, dentro da pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

## Organização dos módulos

- `app.js`: controla as rotas, renderiza a tela selecionada e configura o menu.
- `templates.js`: contém os templates HTML das telas inicial, projetos e cadastro.
- `formulario.js`: valida os dados e trata o envio do formulário.
- `storage.js`: salva e recupera os cadastros no `localStorage`.
- `style.css`: concentra identidade visual, componentes e regras responsivas.

## Observações sobre os dados

Este é um projeto acadêmico demonstrativo. Os cadastros são armazenados somente no navegador utilizado, não são enviados para um servidor e podem ser apagados ao limpar os dados do site. Não utilize informações pessoais reais. Os projetos sociais e os dados institucionais são fictícios.

## Próximas melhorias

- Criar uma API e um banco de dados para persistência segura.
- Implementar autenticação para uma área administrativa.
- Adicionar testes automatizados.
- Melhorar a acessibilidade com testes de navegação por teclado e leitores de tela.
- Substituir conteúdos demonstrativos por informações reais, caso o projeto seja adotado por uma organização.

## Contexto

Projeto acadêmico desenvolvido durante os estudos de Análise e Desenvolvimento de Sistemas, com foco em fundamentos de front-end e organização modular do JavaScript.
