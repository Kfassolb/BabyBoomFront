import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tiposuscripcion } from 'src/app/model/Tiposuscripcion';
import { TiposuscripcionService } from 'src/app/service/tiposuscripcion.service';

@Component({
  selector: 'app-tiposuscripcion-listar',
  templateUrl: './tiposuscripcion-listar.component.html',
  styleUrls: ['./tiposuscripcion-listar.component.css']
})
export class TiposuscripcionListarComponent implements OnInit {

  lista:Tiposuscripcion[] = [];
  dataSource:MatTableDataSource<Tiposuscripcion> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'tipoSuscripcion']
  constructor(private tcS:TiposuscripcionService){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      })
  }
}
