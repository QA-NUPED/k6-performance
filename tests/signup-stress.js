import http from 'k6/http'
import { sleep, check } from 'k6'
import uuid from './libs/uuid.js'

// script para execução do teste de estresse 
export const options = {
  stages: [
    { duration: '2m', target: 100 },  // trafego normal 
    { duration: '10m', target: 200 }, // tráfego ramp-up de 1 para mais de 200 usuários em 10 minutos.
    { duration: '30m', target: 200 }, // fique com mais de 200 usuários por 30 minutos
    { duration: '5m', target: 0 },    // ramp-down com 0 usuarios
  ],
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

