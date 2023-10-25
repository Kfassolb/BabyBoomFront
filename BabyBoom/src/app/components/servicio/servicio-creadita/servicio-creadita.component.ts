import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Servicio } from 'src/app/model/Servicio';
import { ServicioService } from 'src/app/service/servicio.service';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-servicio-creadita',
  templateUrl: './servicio-creadita.component.html',
  styleUrls: ['./servicio-creadita.component.css']
})
export class ServicioCreaditaComponent implements OnInit {
  id: number=0;
  edicion: boolean=false;

form:FormGroup=new FormGroup({})
servicio:Servicio= new Servicio()
mensaje: string = ""
maxFecha:Date=moment().add(-1,'days').toDate();

constructor(private sS:ServicioService,
   private router:Router,
   private route: ActivatedRoute,
   private toastr:ToastrService){}

ngOnInit(): void {
  this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion=data['id']!=null;
    this.init();
  })
  this.form = new FormGroup({
    id:new FormControl(),
    NombreServicio:new FormControl()
  });
}
aceptar(): void {
  this.servicio.id = this.form.value['id'];
  this.servicio.NombreServicio = this.form.value['NombreServicio'];

  if (this.form.value['NombreServicio'] != null && this.form.value['NombreServicio'].length>=3 && this.form.value['NombreServicio'].length<=200 && /^[a-zA-ZñÑ]+$/.test(this.form.value['NombreServicio'])){
  if(this.edicion){
    this.sS.modificar(this.servicio).subscribe(()=>{
      this.sS.list().subscribe(data=>{
        this.sS.setList(data);
      });
    });
  }else {
    if(this.form.value['id'] != null && this.form.value['id']>0 && this.form.value['id'].length>=1 && this.form.value['id'].length<=10 && /^[0-9]+$/.test(this.form.value['id'])){
      this.sS.insert(this.servicio).subscribe(()=>{
        this.sS.list().subscribe(data=>{
          this.sS.setList(data);
        })
      })
      this.router.navigate(['servicio']);
    }else{
      this.toastr.warning('Id Invalido (solo números, debe ser mayor a 0 y de 1 a 10 caracteres)');
    }
  }
 }else{
  this.toastr.warning('Ingrese nombre correctamente (solo letras y de 2 a 200 caracteres)');
 }
}
init() {
  if (this.edicion) {
    this.sS.listarId(this.id).subscribe(data => {
    this.form = new FormGroup({
        id: new FormControl(data.id),
        NombreServicio: new FormControl(data.NombreServicio),


      });
      console.log(data);
    });
  }
 }
}
