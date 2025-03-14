# GitHub User Search

Este é um projeto desenvolvido em **React**, utilizando **Axios**, **SWR** e **React Router DOM** para consumir a API do GitHub e exibir informações sobre um usuário e seus repositórios de forma responsiva até tablets.

## 📌 Funcionalidades

- Pesquisa de usuário do GitHub pelo **username**.
- Exibição das informações do usuário:
  - Foto/avatar
  - Nome
  - Bio (descrição)
- Listagem de repositórios do usuário em formato de **cards**, mostrando:
  - Nome do repositório
  - Descrição
- Modal com detalhes do repositório ao clicar em um card, exibindo:
  - Tipo de privacidade (visibility)
  - Link de acesso ao projeto (html_url)
  - Descrição
  - Linguagem principal do projeto
- Validação para evitar busca vazia
- **Loading** indicativo durante a requisição
- Mensagem de erro em caso de falha na busca
- Design responsivo até dispositivos **tablet**

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca principal para construção da interface
- **Axios** - Para requisições HTTP
- **SWR** - Para gerenciamento de dados remotos e cache
- **React Router DOM** - Para navegação entre as telas
- **Styled Components / CSS Modules** - Para estilização

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o repositório:
```bash
  git clone https://github.com/seu-usuario/github-user-search.git
```

### 2️⃣ Acessar o diretório do projeto:
```bash
  cd github-user-search
```

### 3️⃣ Instalar as dependências:
```bash
  npm install
  # ou
  yarn install
```

### 4️⃣ Iniciar o projeto:
```bash
  npm start
  # ou
  yarn start
```

A aplicação estará disponível em **http://localhost:3000** 🚀

## 🔗 Protótipo no Figma
[Link para o design](https://www.figma.com/file/yOLKhfoM0mlU1fOItBPcsI/TEACH-3035?type=design&mode=design&t=daKUn1lO1lqgXUWt-1)

## 📷 Demonstração
(Adicione aqui capturas de tela ou um gif mostrando o funcionamento da aplicação)

## 📌 Melhorias Futuras
- Implementar paginação nos repositórios
- Melhorar a responsividade para telas menores
- Adicionar testes unitários

