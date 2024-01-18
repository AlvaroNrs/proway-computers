import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {

  /*Com o FormBuilder, os campos do formulário são agrupados e podem ser aplicadas validações a eles*/

  /*Ex: nome é um campo que recebe primeiro o valor inicial no array e, após ele, outro array com as validações*/
  formContato = this.fb.group({
    nome : ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto : ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone : ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email : ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem : ["", [
      Validators.minLength(20),
      Validators.required
    ]]

  });

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("A mensagem foi enviada!");
    /*Resetando o formulário*/
    this.formContato.reset();
  }


}
