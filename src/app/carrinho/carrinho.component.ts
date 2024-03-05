import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService : CarrinhoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal()
  {
    //Soma do total da lista do carrinho, baseando-se nos itens anteriores e postereiores em preço e quantidade
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  comprar()
  {
    alert("Parabéns, você finalizou a sua compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

  removerProdutoCarrinho(produtoId: number): void 
  {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

}