import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: String[] = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro', 'Paulo', 'Marcos'];
}
