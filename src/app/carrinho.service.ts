import { Injectable } from '@angular/core';
import { IProdutoCarrinho, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adcionarAoCarrinho(produto : IProdutoCarrinho)
  {
    this.itens.push(produto);
    /* Informando o que será passado para dentro do localStorage. Nesse caso, os produtos */
    /* stringfy -> Conversão de um objeto para string*/
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho()
  {
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(idProduto: number)
  {
    //Pegando todos os produtos do array, exceto os com o iD especificado
    this.itens = this.itens.filter(item => item.id !== idProduto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

}
