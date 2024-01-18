import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService : CarrinhoService,
    private appRouting : AppRoutingModule
  ) { }

  ngOnInit(): void {
  }

}
