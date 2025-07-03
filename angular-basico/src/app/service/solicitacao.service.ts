import { Injectable } from '@angular/core';

export interface Solicitacao {
  id: number;
  nome: string;
  equipamento: string;
  justificativa: string;
  status?: string
}

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {
  private solicitacoes: Solicitacao[] = [];
  private nextId = 1;

 adicionarSolicitacao(solicitacao: Omit<Solicitacao, 'id'>) {
    this.solicitacoes.push({ ...solicitacao, id: this.nextId++ });
  }

  listarSolicitacoes(): Solicitacao[] {
    return this.solicitacoes;
  }

   atualizarStatus(solicitacao: Solicitacao, status: string) {
    const item = this.solicitacoes.find(s => s.id === solicitacao.id);
    if (item) {
      item.status = status;
    }
  }
}
