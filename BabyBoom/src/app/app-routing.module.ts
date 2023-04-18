import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component';

const routes: Routes = [
  {
    path:'tipocomprobantes', component:TipocomprobanteComponent, children:[
      {path: 'tipocomprobanteeditar',component:TipocomprobanteCreaeditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
