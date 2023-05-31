import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../service/senhas.service';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.page.html',
  styleUrls: ['./emissor.page.scss'],
})
export class EmissorPage implements OnInit {

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

  constructor(private senhas: SenhasService) { }

  ngOnInit() {
  }

  // Métodos para gerar as senhas
  gerarSenhasSP(){
    const chave: number = this.cpf;
    const valor: string = this.ano+ "/" + this.mes + "/" + this.dia + "-SP" + this.SqSp;
    this.senhas.adicionarSenha(chave, valor);
    this.cpf = 0;
    this.SqSp++;

    console.log(this.senhas.obterSenha(chave));
  }
  gerarSenhasSE(){
    const chave: number = this.cpf;
    const valor: string = this.ano+ "/" + this.mes + "/" + this.dia + "-SE" + this.SqSe;
    this.senhas.adicionarSenha(chave, valor);
    this.cpf = 0;
    this.SqSe++;

    console.log(this.senhas.obterSenha(chave));
  }
  gerarSenhasSG(){
    const chave: number = this.cpf;
    const valor: string = this.ano+ "/" + this.mes + "/" + this.dia + "-SG" + this.SqSg;
    this.senhas.adicionarSenha(chave, valor);
    this.cpf = 0;
    this.SqSg++;

    console.log(this.senhas.obterSenha(chave));
  }

}
