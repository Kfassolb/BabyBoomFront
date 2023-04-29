import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/Producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  lista: Producto[] = [];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'cantidad', 'preciounitario','accion1'];
  constructor(private pS: ProductoService) {}

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    });
  }
}
