
# Teste Técnico (Front End) - BeMobile

Olá, seja bem-vindo! 😁

Este repositório é dedicado ao teste front-end criado pela BeMobile e desenvolvido por mim!

O objetivo deste teste é desenvolver uma interface que liste todos os funcionários de uma determinada empresa em uma tabela, incluindo os campos de foto, nome, cargo, data de admissão e telefone.

## Importante!

Os dados utilizados são provenientes de uma API simulada utilizando json-server, fornecida pela BeMobile. O desafio e a API podem ser visitados por este link.
## Stack utilizada

**Front-end:** React e NextJS(TypeScript)

**Bibliotecas:** Styled-Components, react-loader-spinner e axios
## Screenshots

fotos aqui


## Rodando localmente (Front-End)
Para que carregue a lista de funcionários e seja possível testar suas funcionalidades, a API simulada deve estar rodando no back-end em conjunto com o front-end localmente.

Clone o projeto

```bash
  git clone https://github.com/esdrasaaf/bemobile-front
```

Entre no diretório do projeto

```bash
  cd bemobile-front
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
  npm run dev
```


## Rodando localmente (Back-End)

- Caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);

- Clone este repositório do GitHub em sua máquina: 
```bash
  [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end);
```

- Entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `json-server --watch db.json`, para consumir a API simulada;

- Inicie a estrutura e o desenvolvimento do projeto.

É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

### Importante!
Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou 
com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.
## Licença

[MIT](https://choosealicense.com/licenses/mit/)

