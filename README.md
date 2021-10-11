# Desafio Bridge_

Este é um projeto que utiliza o [Next.js](https://nextjs.org/) como framwork, e foi criado com o auxílio do pacote [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Apesar de não estar integrada com o backend, foi publicada uma versão da interface em
[https://desafio-bridge.vercel.app/](https://desafio-bridge.vercel.app/) que não irá funcionar justamente pois não conseguir fazer o deploy do backend e sua devida intergração.

## Inicializando a aplicação (Local)

Como já deve imaginar, você deve primeiramente clonar este projeto para sua máquina e em seguida, em uma nova janela do terminal de sua preferência, executar o comando `yarn` para que as dependências do projetos sejam instaladas. Feito isso você pode rodar sua aplicação executando um dos seguintes comandos:

```bash
npm run dev
# ou
yarn dev
```

Assim que a compilação estiver finalizada, abra [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.

## Sobre a aplicação

Foi solicitado o desenvolvimento de uma `PWA` que se comunicasse com uma API desenvolvida em `Kotlin + SpringBoot`. No frontend o usuário deveria conseguir escrever um número maior ou igual a 100 em um campo de input. Com o envio do formulário, uma requisição deveria ser enviada à API, e tanto o menor multiplo duodigito do número escolhido pelo usuário quanto o tempo que foi necessário para realizar tal cálculo deveriam ser retornados. 

Bom, a interface da aplicação ficou bem simples, e não me preocupei muito com questões estéticas. Decidi utilizar o Next.js definitivamente por sua facilidade de deploy, e pela fácil integração com a biblioteca [`next-pwa`](https://github.com/shadowwalker/next-pwa) que me permitiu transformar minha aplicação comum em uma *Progressive Web Application*. Implementei o tratamento de erro para o input, e criei uma ui de apresentação dos resultados que mostra alguns dados que considerei interessantes. 

## Melhorias

- Refinar a interface de usuário
- Utilizar uma biblioteca de estilização (tailwind ou styled-components seriam minhas preferências)
- Implementar uma interface de loading
- Tratar os erros da requisição
- Implementar o histórico de consultas ao backend (falta de tempo)
- Implementar Typescript
- Refinar o código
