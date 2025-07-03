import { Component } from '@angular/core';
import { SolicitacaoService } from '../../service/solicitacao.service';

interface solicitacaoEquipamento {
  id: number;
  nome: string;
  equipamento: string;
  justificativa: string;
  status?: string
}

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})

export class PaiComponent {
  solicitacoes: solicitacaoEquipamento[] = [];

constructor(private solicitacaoService: SolicitacaoService) {
    this.atualizarSolicitacoes();
  }

  adicionarSolicitacao(solicitacao: solicitacaoEquipamento) {
    // Já foi adicionado no service pelo FilhoComponent
    this.atualizarSolicitacoes();
  }

  atualizarSolicitacoes() {
    this.solicitacoes = this.solicitacaoService.listarSolicitacoes();
  }


  alterarStatus(solicitacao: solicitacaoEquipamento, status: string) {
  this.solicitacaoService.atualizarStatus(solicitacao, status);
  this.atualizarSolicitacoes();
}


}
