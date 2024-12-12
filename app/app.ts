import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negociacao: NegociacaoController = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
     event.preventDefault();
     negociacao.adiciona();
});