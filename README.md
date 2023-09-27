## POC para uso da ferramenta K6
Este PR foi um estudo para o uso da ferramenta K6 para os nossos testes de perfomance, foi avaliado a aplicabilidade e a curva de aprendizado da ferramenta no dia a dia de trabalho. 
O K6 é uma ferramente que usa o JavaScript para escrita dos testes possibilitando realizar testes de carga, estresse e fumaça. 
O K6 retorna as informações através do relatório no terminal, podendo também ser configurado para gerar um report HTML. 

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [JavaScript] - linguagem de programação
- [k6](https://k6.io/docs/) - ferramenta para teste de carga, performance, stress 

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Execute os comandos abaixo para subir a API do projeto:

```sh
cd k6-perfomance/api
yarn install
yarn dev
