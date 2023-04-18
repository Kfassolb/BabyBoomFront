import { TipocomprobanteService } from './../../../service/tipocomprobante.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipocomprobante-creaedita',
  templateUrl: './tipocomprobante-creaedita.component.html',
  styleUrls: ['./tipocomprobante-creaedita.component.css']
})
export class TipocomprobanteCreaeditaComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  tipocomprobante:Tipocomprobante = new Tipocomprobante();
  mensaje:string = "";
  maxFecha:Date = moment().add(-1, 'days').toDate();
  constructor(private tcS:TipocomprobanteService, private router:Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id:new FormControl(),
      nombreComprobante:new FormControl(),
    })
  }
  aceptar():void{
    this.tipocomprobante.id = this.form.value['id'];
    this.tipocomprobante.nombreComprobante = this.form.value['nombreComprobante']
    if(this.form.value['nombreComprobante'].length>0){
      this.tcS.insert(this.tipocomprobante).subscribe(data=>{
        this.tcS.list().subscribe(data=>{
          this.tcS.setList(data);
        })
      })
      this.router.navigate(['tipocomprobantes'])
    }else{
      this.mensaje = "Ingrese el nombre!!";
    }
  }
}
