import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {
  @Input() mensagem: string = '';
  @Output() mensagemDoFilho = new EventEmitter<void>();

  enviarMensagemParaOPai() {
    this.mensagemDoFilho.emit();
  }
}
