import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  private senha: { [chave: number]: any } = {};

  constructor() { }

  adicionarSenha(chave: number, valor: any){
    this.senha[chave] = valor;
  }

  obterSenha(chave: number){
    return this.senha[chave];
  }

  obterTodasSenhas(){
    return this.senha;
  }

}
