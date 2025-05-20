import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  username: string | null = '';

  //injetando o serviço de rota
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        this.username = params.get('username');
      });

  }
}
