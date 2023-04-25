import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
import { TipocomprobanteListarComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-listar.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ServicioListarComponent } from './components/servicio/servicio-listar/servicio-listar.component';

const routes: Routes = [
  {
    path: 'Usuario', component:UsuarioComponent, children: [
      {path:'agregar', component:UsuarioCreaeditaComponent},
      {path:'editar/:id', component:UsuarioCreaeditaComponent}
    ]
  },
  {
    path: 'Comprobante', component:TipocomprobanteComponent, children: [
      {path:'agregar', component:TipocomprobanteListarComponent}
    ]
  },
  {
    path: 'Servicio', component:ServicioComponent, children: [
      {path:'agregar', component:ServicioListarComponent}
    ],
  },
  {
    path: 'Enfermedad', component:ServicioComponent, children: [
      {path:'agregar', component:ServicioListarComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
