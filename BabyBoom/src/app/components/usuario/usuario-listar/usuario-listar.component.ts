import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialog } from '@angular/material/dialog'
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit{
  lista: Usuario[]=[];
  dataSource: MatTableDataSource<Usuario>=new MatTableDataSource();
  displayedColumns: string[]=['id', 'username', 'password','actualizar'];
  private idHigh:number=0;

  constructor(private uS: UsuarioService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.uS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.uS.getConfirmDeletion().subscribe(data=>{
      data == true? this.delete(this.idHigh):false;
    })
  }
  confirm(id: number){
    this.idHigh = id;
    this.dialog.open(UsuarioDialogoComponent)
  }
  delete(id:number){
    this.uS.delete(id).subscribe(()=>{
      this.uS.list().subscribe(data=>{
        this.uS.setList(data); /* se ejecuta la línea 28 */
      })
    })
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}

