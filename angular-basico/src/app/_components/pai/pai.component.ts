import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {
  mensagemDoFilho = '';
  mensagemDoPai = '';

  receberMensagemDoFilho(){
    this.mensagemDoFilho = 'Mensagem recebida do filho!';
  }

  enviarMensagemParaFilho(){
    this.mensagemDoPai = 'Mensagem recebida do pai!';
  }
}
