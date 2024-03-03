
# Teste Técnico (Front End) - BeMobile

Olá, seja bem-vindo! 😁

Este repositório é dedicado ao teste front-end criado pela BeMobile e desenvolvido por mim!

O objetivo deste teste é desenvolver uma interface que liste todos os funcionários de uma determinada empresa em uma tabela, incluindo os campos de foto, nome, cargo, data de admissão e telefone.

Os dados utilizados são provenientes de uma API simulada utilizando json-server, fornecida pela BeMobile. O desafio e a API podem ser visitados por este <a href="https://github.com/BeMobile/desafio-front-end">link<a/>.
## Stack utilizada

**Front-end:** React e NextJS(TypeScript)

**Bibliotecas:** Styled-Components, react-loader-spinner e axios

## Layout
### Desktop
<img src="https://i.ibb.co/frNKgS3/Captura-de-tela-de-2024-03-02-18-45-13.png" alt="Captura-de-tela-de-2024-03-02-18-45-13" border="0" />
<img src="https://i.ibb.co/VDRTsrr/Captura-de-tela-de-2024-03-02-18-42-38.png" alt="Captura-de-tela-de-2024-03-02-18-42-38" border="0" />
<img src="https://i.ibb.co/n16PyV1/Captura-de-tela-de-2024-03-02-18-43-04.png" alt="Captura-de-tela-de-2024-03-02-18-43-04" border="0" />

### Mobile
<div>
  <img src="https://i.ibb.co/R7crMQy/Captura-de-tela-de-2024-03-03-00-19-32.png" alt="Captura-de-tela-de-2024-03-03-00-19-32" border="0">
  <img src="https://i.ibb.co/w0w0bYN/Captura-de-tela-de-2024-03-03-00-22-08.png" alt="Captura-de-tela-de-2024-03-03-00-22-08" border="0">
</div>
<div>
  <img src="https://i.ibb.co/KWPxgwp/Captura-de-tela-de-2024-03-03-00-22-02.png" alt="Captura-de-tela-de-2024-03-03-00-22-02" border="0">
  <img src="https://i.ibb.co/HHQPVCg/Captura-de-tela-de-2024-03-03-00-20-30.png" alt="Captura-de-tela-de-2024-03-03-00-20-30" border="0">
</div>

## Rodando localmente (Front-End)
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

### Importante!
É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

## Rodando localmente (Back-End)

- Caso você não tenha, instale o pacote [json-server](https://github.com/typicode/json-server);

- Clone este repositório do GitHub em sua máquina: 
```bash
  [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end);
```

- Entre na pasta do projeto, em sua máquina, e, por meio da linha de comando, execute o comando `json-server --watch db.json`, para consumir a API simulada;

- Inicie a estrutura e o desenvolvimento do projeto.

### Importante!
É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou 
com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.
## Licença

[MIT](https://choosealicense.com/licenses/mit/)

