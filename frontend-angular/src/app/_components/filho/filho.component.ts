import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitacaoService } from '../../service/solicitacao.service';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})

export class FilhoComponent {
  nome = '';
  equipamento = '';
  justificativa = '';

  constructor(
    private solicitacaoService: SolicitacaoService,
    private router: Router
  ) {}

  @Output() novaSolicitacao = new EventEmitter<any>();

  enviarSolicitacao() {
    const solicitacao = {
      nome: this.nome,
      equipamento: this.equipamento,
      justificativa: this.justificativa,
      status: 'Pendente' // Definindo o status inicial como 'Pendente'
    };

    this.solicitacaoService.adicionarSolicitacao(solicitacao);

    this.novaSolicitacao.emit(solicitacao);

    // Limpar os campos após enviar a solicitação
    this.nome = '';
    this.equipamento = '';
    this.justificativa = '';
  }
}
