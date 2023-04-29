import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-servicio-dialogo',
  templateUrl: './servicio-dialogo.component.html',
  styleUrls: ['./servicio-dialogo.component.css']
})
export class ServicioDialogoComponent implements OnInit{

  constructor( private Ss:ServicioService,
   private dialogRef: MatDialogRef<ServicioDialogoComponent>){}
   ngOnInit(): void {}
   confirmar(estado:boolean){
    this.Ss.setConfirmaEliminacion(estado);
    this.dialogRef.close();
   }


}
