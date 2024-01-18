import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos : IProduto[] = produtos;
  p : IProduto | undefined;

  constructor() { }

  getAll()
  {
    return this.produtos;
  }

  getOne(produtoId : number)
  {
    /*Aqui, "===" é uma comparação*/
    return this.produtos.find(produto => produto.id === produtoId);
  }

}
