import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {

  num: number = 1;

  ngDoCheck(): void {
    // função disparada sempre que houver uma mudança de estado na aplicação
    console.log('Mudou o estado da aplicação');
  }

  adicionar(): void {
    this.num++;
  }


}
