import http from 'k6/http'
import { sleep, check } from 'k6'
import uuid from './libs/uuid.js'

// script para configuracoes de execução dos testes 
export const options = {
  vus: 15,
  duration: '25s',
  //thresholds configura limites na execução dos testes
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em ate 2s 
    http_req_failed: ['rate<0.01'] // Podem ocorrer erros em menos de 1% das requisições 
  }
}


export default function () {
  const url = 'http://localhost:3333/signup'

  const payload = JSON.stringify ({
    email:    `${uuid.v4()}@qa.com.br`, 
    password: 'teste123'  
  })
  // o comando JSON.stringify transforma o objeto json em uma string, pode ser usado para enviar massa de dados 

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const resultado = http.post(url, payload, params);
  console.log(resultado.body)

  check (resultado, {
    'status should be 201': (r) => r.status === 201
  })

  sleep(1);
}

