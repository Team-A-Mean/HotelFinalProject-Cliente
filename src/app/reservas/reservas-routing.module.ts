import { FormularioComponent } from './../formulario/formulario.component';
import { AppRoutingModule } from './../app-routing.module';
import { ReservasComponent } from './reservas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio', component: ReservasComponent,

    //  children: [
    //   {
    //     path: '',
    //     component: FormularioComponent
    //   }
    // ]

  },
  { path: 'inicio/reserva', component: FormularioComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ReservasRoutingModule { }
