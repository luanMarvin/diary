# Diary - Web APP

Este é um aplicativo web simples que permite adicionar registros em um diário, contendo título, descrição e data.

## Funcionalidades:

o Web APP permite que você registre notas e adicione um data a esses registros. É possivel usar a interface da aplicação para ver as notas registradas previamente.

## Configure:

### Clone o projeto:

Primeiramente é necessário clonar esse repositório na sua máquina.

```
https://github.com/luanMarvin/diary.git
```

### Instale as dependências:

Depois você irá navegar até a pasta criada `diary` e instalar as dependências ao usar o comando:

```
npm install
```

### Execute a aplicação:

Ao terminar a instalação é necessário iniciar o servidor e acessar a aplicação.

Para iniciar o servidor apenas digite no prompt:

```
npm start
```

e depois, acesse o link `https://127.0.0.1:8080` em seu navegador.

## Informações Adicionais:

A aplicação grava todos os dados em `store/logs.json`.

Cada registro adiciona informações no arquivo `logs.json` que pode ser reaproveitado depois por outra aplicação caso necessário.
