import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';

@Component({
  selector: 'app-tipocomprobante-listar',
  templateUrl: './tipocomprobante-listar.component.html',
  styleUrls: ['./tipocomprobante-listar.component.css']
})
export class TipocomprobanteListarComponent implements OnInit{
  lista:Tipocomprobante[] = [];
  dataSource:MatTableDataSource<Tipocomprobante> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'tipoComprobante','accion1']
  constructor(private tcS:TipocomprobanteService){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      });
      this.tcS.getList().subscribe(data=>{
        this.dataSource= new MatTableDataSource(data);
      });
  }
}
