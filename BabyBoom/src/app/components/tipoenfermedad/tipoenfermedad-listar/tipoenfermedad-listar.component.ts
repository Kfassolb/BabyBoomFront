import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tipoenfermedad } from 'src/app/model/Tipoenfermedad';
import { TipoEnfermedadeService } from 'src/app/service/tipoenfermedad.service'
import { MatDialog } from '@angular/material/dialog';
import { TipoenfermedadDialogoComponent } from './tipoenfermedad-dialogo/tipoenfermedad-dialogo.component';

@Component({
  selector: 'app-tipoenfermedad-listar',
  templateUrl: './tipoenfermedad-listar.component.html',
  styleUrls: ['./tipoenfermedad-listar.component.css']
})
export class TipoenfermedadListarComponent implements OnInit{
  lista:Tipoenfermedad[] = [];
  dataSource:MatTableDataSource<Tipoenfermedad> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'nombreEnfermedad','TipoEnfermedad','accion01']
  private idMayor: number = 0;

  constructor(private tcS:TipoEnfermedadeService,private dialog:MatDialog ){
  }
  ngOnInit(): void {
      this.tcS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data);
      });

      this.tcS.getList().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
      this.tcS.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
    }
    confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(TipoenfermedadDialogoComponent);
    }
    eliminar(id: number) {
      this.tcS.eliminar(id).subscribe(() => {
        this.tcS.list().subscribe(data => {
          this.tcS.setList(data);/* se ejecuta la línea 27 */
        });
      });
    }
    filtrar(e: any) {
      this.dataSource.filter = e.target.value.trim();
    }

  }

