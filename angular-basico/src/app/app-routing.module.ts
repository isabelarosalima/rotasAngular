import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { AfilhamentoComponent } from './pages/afilhamento/afilhamento.component';

//configurando lista de rotas
const routes: Routes = [
  {path: '', component: HomeComponent}, //redireciona para a rota home
  {path: 'users/list', component: UsersComponent},
  {path: 'users/:username', component: UserComponent}, //rota com parametro
  {path: 'afilhamento/interacao', component: AfilhamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
