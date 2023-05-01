import { Dialog } from '@angular/cdk/dialog';
<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Renzo
import { MatTableDataSource } from '@angular/material/table';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';
import { TipocomprobanteDialogoComponent } from './tipocomprobante-dialogo/tipocomprobante-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatPaginator } from '@angular/material/paginator';
=======
>>>>>>> Renzo

@Component({
  selector: 'app-tipocomprobante-listar',
  templateUrl: './tipocomprobante-listar.component.html',
  styleUrls: ['./tipocomprobante-listar.component.css']
})
export class TipocomprobanteListarComponent implements OnInit{
  lista:Tipocomprobante[] = [];
  dataSource:MatTableDataSource<Tipocomprobante> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'tipoComprobante','accion1']
  private idMayor:number=0
<<<<<<< HEAD
  @ViewChild(MatPaginator) paginator!: MatPaginator;
=======
>>>>>>> Renzo
  constructor(private tcS:TipocomprobanteService, private dialog:MatDialog){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
      this.tcS.getList().subscribe(data=>{
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
      this.tcS.getConfirmarEliminar().subscribe(data=>{
        data == true ? this.eliminar(this.idMayor):false;
      })
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(TipocomprobanteDialogoComponent);
  }
  eliminar(id:number){
    this.tcS.eliminar(id).subscribe(() =>{
      this.tcS.list().subscribe(data=>{
        this.tcS.setList(data);
<<<<<<< HEAD
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
=======
>>>>>>> Renzo
      })
    })
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
