import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { AfilhamentoComponent } from './pages/afilhamento/afilhamento.component';
import { FilhoComponent } from './_components/filho/filho.component';
import { PaiComponent } from './_components/pai/pai.component';

//configurando lista de rotas
const routes: Routes = [
  {path: '', component: HomeComponent}, //redireciona para a rota home
  {path: 'users/list', component: UsersComponent},
  {path: 'users/:username', component: UserComponent}, //rota com parametro
  {path: 'afilhamento/interacao', component: AfilhamentoComponent},
  {path: 'filho/formulario', component: FilhoComponent},
  {path: 'pai/lista', component: PaiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
