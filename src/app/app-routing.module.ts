import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DetalleComponent } from './component/detalle/detalle.component';

const routes: Routes = [
  {path:'', component: DetalleComponent},
  {path:'detalle', component: DetalleComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
