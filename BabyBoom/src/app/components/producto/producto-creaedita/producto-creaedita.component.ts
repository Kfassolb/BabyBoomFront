import { TipoproductoService } from './../../../producto/TipoproductoService.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/model/producto';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './productocreaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit{
  id:number=0;
  edicion:boolean=false;
  form:FormGroup = new FormGroup({});
  producto:Producto = new Producto();
  mensaje:string = "";
  maxFecha:Date = moment().add(-1, 'days').toDate();
  constructor(private tcS:ProductoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion= data['id']!=null;
      this.init();
    });

    this.form = new FormGroup({
      id:new FormControl(),
      nombre:new FormControl(),
    })
  }
  aceptar():void{
    this.producto.id = this.form.value['id'];
    this.producto.nombre = this.form.value['nombre']
    if(this.form.value['nombre'].length>0){
      if(this.edicion){
        this.tcS.update(this.producto).subscribe(()=>{
          this.tcS.list().subscribe(data=>{
            this.tcS.setList(data);
          });
        });
      }else{
        this.tcS.insert(this.producto).subscribe(data=>{
          this.tcS.list().subscribe(data=>{
            this.tcS.setList(data);
          })
        })
      }
      this.router.navigate(['tipocomprobantes'])
    }else{
      this.mensaje = "Ingrese el nombre!!";
    }
  }

  init(){
    if(this.edicion){
      this.tcS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          id:new FormControl(data.id),
          nombreComprobante:new FormControl(data.nombreComprobante)
        });
      });
    }
  }
}
