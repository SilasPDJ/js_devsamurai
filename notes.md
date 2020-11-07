# Aprendi
- Yarn é necessário para o node

- Windows PowerShell é o shell (sh) do linux...



yarn add @babel/core
yarn add @babel/cli
yarn add @babel/present-env

- .babelrc
- preset-env analisa qual ambiente eu to usando, ou o browser, ou whatever... E faz a conversão para os códigos


# Em package json, criando um atalho
-   "scripts":{
    "dev": "babel ./main.js -o bundle.js -w" 
  }
- Agora posso chamar o arquivo "main.js" com o comando "yarn babel" pelo powerShell 

- w adicionado no final do "dev": toda vez que ocorrer a mudança

# yarn install cria o projeto vindo do git com todos os módulos necessários