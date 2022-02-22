# Telzir Backend

Backend do projeto Telzir, utiliza NestJS em sua composição.

## Rodando aplicação local

### Instalação:

Este projeto utiliza docker como dependencia obrigatória.

1. Renomeie o arquivo .env.example para .env
2. Execute: `docker-compose up`

A aplicação estará rodando em [http://localhost:5000](http://localhost:5000) no ambiente local.

### Migrations:

Para criar as tabelas do banco de dados do projeto:

1. Acesse o container: `docker exec -it id_do_container bash`
2. Execute `yarn migrate`

### Seeds:

Para popular as tabelas do com dados pré determinados:

1. Acesse o container: `docker exec -it id_do_container bash`
2. Execute `yarn seed`

## Testes unitários:

Para executar os testes unitários:

1. Acesse o container: `docker exec -it id_do_container bash`
2. Execute `yarn test`
