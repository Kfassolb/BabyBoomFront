import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Servicio } from 'src/app/model/Servicio';
import { ServicioService } from 'src/app/service/servicio.service';
@Component({
  selector: 'app-servicio-creadita',
  templateUrl: './servicio-creadita.component.html',
  styleUrls: ['./servicio-creadita.component.css']
})
export class ServicioCreaditaComponent implements OnInit {
form:FormGroup=new FormGroup({});
servicio:Servicio= new Servicio();
mensaje: string = "";
maxFecha:Date=moment().add(-1,'days').toDate();

constructor(private sS:ServicioService, private router:Router){}

ngOnInit(): void {
  this.form = new FormGroup({
    id:new FormControl(),
    NombreServicio:new FormControl(),
  })
}
aceptar(): void{
this.servicio.IDservicio=this.form.value['IDservicio'];
this.servicio.NombreServicio=this.form.value['NombreServicio']
if(this.form.value['NombreServicio'].length>0){
  this.sS.insert(this.servicio).subscribe(data=>{
    this.sS.list().subscribe(data=>{
      this.sS.setlist(data);
    })
  })
  this.router.navigate(['Servicios'])
}else{
  this.mensaje="Ingrese el nombre!!"
}
}

}
