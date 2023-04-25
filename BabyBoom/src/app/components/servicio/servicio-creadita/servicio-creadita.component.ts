import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Servicio } from 'src/app/model/Servicio';
import { ServicioService } from 'src/app/service/servicio.service';
@Component({
  selector: 'app-servicio-creadita',
  templateUrl: './servicio-creadita.component.html',
  styleUrls: ['./servicio-creadita.component.css']
})
export class ServicioCreaditaComponent implements OnInit {
  id: number=0;
  edicion: boolean=false;

form:FormGroup=new FormGroup({});
servicio:Servicio= new Servicio();
mensaje: string = "";
maxFecha:Date=moment().add(-1,'days').toDate();
constructor(private sS:ServicioService, private router:Router, private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion=data['id']!=null;
    this.init();
  })
  this.form = new FormGroup({
    id:new FormControl(),
    NombreServicio:new FormControl(),
  })
}
aceptar(): void {
  this.servicio.id = this.form.value['id'];
  this.servicio.NombreServicio = this.form.value['NombreServicio'];

  if (this.form.value['NombreServicio'].length > 0) {
    this.sS.insert(this.servicio).subscribe(data => {
      this.sS.list().subscribe(data => {
        this.sS.setList(data);
      })
    })
    this.router.navigate(['servicio']);
  } else {
    this.mensaje = "Ingrese el nombre!!!";
  }
}
init() {
  if (this.edicion) {
    this.sS.listarId(this.id).subscribe(data => {
      //this.propietario = data

      this.form = new FormGroup({
        id: new FormControl(data.id),
        NombreServicio: new FormControl(data.NombreServicio),


      });
      console.log(data);
    });
  }
}
}
