import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined; 
  quantidade = 1;

  constructor(
    private produtoService : ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const produtoId = Number(routParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adcionarAoCarrinho()
  {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    /* Os "..." dizem que o objeto produto terá todas as variáveis idênticas ao produto do qual herda*/
    const produto : IProdutoCarrinho = {
      ...this.produto!,
      quantidade : this.quantidade
    };
    this.carrinhoService.adcionarAoCarrinho(produto);
  }
  
}
