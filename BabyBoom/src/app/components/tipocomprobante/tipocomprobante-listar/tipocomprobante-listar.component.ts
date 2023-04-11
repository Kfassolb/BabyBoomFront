import { Component, OnInit } from '@angular/core';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';

@Component({
  selector: 'app-tipocomprobante-listar',
  templateUrl: './tipocomprobante-listar.component.html',
  styleUrls: ['./tipocomprobante-listar.component.css']
})
export class TipocomprobanteListarComponent implements OnInit{
  lista:Tipocomprobante[] = [];
  dataSource:MatTableDataSource<Tipocomprobante> = new MatTableDataSource();
}
