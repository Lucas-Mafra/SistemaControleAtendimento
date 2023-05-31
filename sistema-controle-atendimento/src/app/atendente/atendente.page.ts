import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../service/senhas.service';

@Component({
  selector: 'app-atendente',
  templateUrl: './atendente.page.html',
  styleUrls: ['./atendente.page.scss'],
})
export class AtendentePage implements OnInit {

  constructor(private senhas: SenhasService) { }

  private senha: { [chave: number]: any } = {};

  ngOnInit() {
    this.senha = this.senhas.obterTodasSenhas();
  }

  chamarSenha(){
    Object.entries(this.senha).forEach(([chave, valor], index) => {
      
    })
  }

}
