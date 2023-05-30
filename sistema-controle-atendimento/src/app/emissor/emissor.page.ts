import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.page.html',
  styleUrls: ['./emissor.page.scss'],
})
export class EmissorPage implements OnInit {
  // Array que irá salvar as senhas geradas pelo botão, será utilizada o esquema chave → valor,
  // sendo, respectivamente, cpf e senha
  senhas: {chave: number, valor: any}[] = [];

  // Pegar a data atual
  dataAtual = new Date();
  ano = this.dataAtual.getFullYear(); 
  mes = this.dataAtual.getMonth() + 1;
  dia = this.dataAtual.getDate();

  // Contadores para a sequência das senhas
  SqSp: number = 0;
  SqSe: number = 0;
  SqSg: number = 0;

  // Variavel para salvar o cpf
  cpf: number = 0;

  // Métodos para gerar as senhas
  gerarSenhasSP(){
    this.senhas.push({chave: this.cpf, valor: this.ano+ "/" + this.mes + "/" + this.dia + "-SP" + this.SqSp})
    this.cpf = 0;
    this.SqSp++;
  }
  gerarSenhasSE(){
    this.senhas.push({chave: this.cpf, valor: this.ano+ "/" + this.mes + "/" + this.dia + "-SE" + this.SqSe})
    this.cpf = 0;
    this.SqSe++;
  }
  gerarSenhasSG(){
    this.senhas.push({chave: this.cpf, valor: this.ano+ "/" + this.mes + "/" + this.dia + "-SG" + this.SqSg})
    this.cpf = 0;
    this.SqSg++;
  }

  constructor() {
   }

  ngOnInit() {
  }

}
