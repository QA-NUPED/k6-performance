## POC para uso da ferramenta K6
Este PR foi um estudo para o uso da ferramenta K6 para os nossos testes de perfomance, foi avaliado a aplicabilidade e a curva de aprendizado da ferramenta no dia a dia de trabalho. 
Por ser feito em GO, é uma ferramenta ágil para execução dos testes. O K6 é uma ferramente que usa o JavaScript para escrita dos testes possibilitando realizar testes de carga, estresse e fumaça. <br>
O K6 retorna as informações através do relatório no terminal, podendo também ser configurado para gerar um report HTML. <br> 

<img width="1136" alt="image" src="https://github.com/QA-NUPED/k6-performance/assets/108770094/dd32574d-2d6e-4222-901d-38322d7856a8">

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [JavaScript] - linguagem de programação
- [k6](https://k6.io/docs/) - ferramenta para teste de carga, performance, stress (link da documentação para auxiliar na instalação do K6) 

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Execute os comandos abaixo para subir a API do projeto:

```sh
cd k6-perfomance/api
brew install yarn 
yarn dev
