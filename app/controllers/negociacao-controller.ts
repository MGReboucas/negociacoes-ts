import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/NgeociacoesView.js";
import { MensagemView } from "../views/MensagemView.js";


export class NegociacaoController{
     private inputData: HTMLInputElement;
     private inputQuantidade: HTMLInputElement;
     private inputValor: HTMLInputElement;
     private negociacoes = new Negociacoes();
     private negociacoesView = new NegociacoesView('#negociacoesView');
     private mensagemView = new MensagemView('#mensagemView');

     constructor(){
          this.inputData = document.querySelector('#data');
          this.inputQuantidade = document.querySelector('#quantidade');
          this.inputValor = document.querySelector('#valor');
          this.negociacoesView.update(this.negociacoes);
     }

     adiciona(): void{
          const negociacao = this.criaNegociacao();
          this.negociacoes.adiciona(negociacao);
          this.negociacoesView.update(this.negociacoes);
          this.mensagemView.update('Negociação Adicionada com sucesso');
          this.limparFormulario();
     }

     criaNegociacao(): Negociacao{
          const exp = /-/g;
          const date = new Date(this.inputData.value.replace(exp, ','));
          const quantidade = parseInt(this.inputQuantidade.value);
          const valor = parseFloat(this.inputValor.value);6
          return new Negociacao(date, quantidade, valor);
     }

     limparFormulario(): void{
          this.inputData.value = "";
          this.inputQuantidade.value = "";
          this.inputValor.value = "";
          this.inputData.focus();
     }

}