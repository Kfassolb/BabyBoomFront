import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposuscripcionComponent } from './components/tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionCreaeditaComponent } from './components/tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';

const routes: Routes = [
  {
  path:'TiposSuscripcion', component:TiposuscripcionComponent,children:[
    {path:'Suscripcioneditar', component:TiposuscripcionCreaeditaComponent},
    {path:'edicion/:id', component:TiposuscripcionCreaeditaComponent},
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
