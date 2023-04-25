import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/model/Producto';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit{
  id:number=0;
  edicion:boolean=false;
  form:FormGroup = new FormGroup({});
  producto:Producto = new Producto();
  mensaje:string = "";
  maxFecha:Date = moment().add(-1, 'days').toDate();
  constructor(private pS:ProductoService, private router:Router, private route:ActivatedRoute){}

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
    this.producto.Nombre = this.form.value['nombre'];
    this.producto.Tipo = this.form.value['tipo'];
    this.producto.Cantidad = this.form.value['cantidad'];
    this.producto.PrecioUnitario = this.form.value['precioUnitario'];
    if(this.form.value['nombre'].length>0){
      if(this.edicion){
        this.pS.update(this.producto).subscribe(()=>{
          this.pS.list().subscribe(data=>{
            this.pS.setList(data);
          });
        });
      }else{
        this.pS.insert(this.producto).subscribe(data=>{
          this.pS.list().subscribe(data=>{
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['Producto'])
    }else{
      this.mensaje = "Ingrese el nombre!!";
    }
  }

  init(){
    if(this.edicion){
      this.pS.listId(this.id).subscribe(data=>{
        this.form = new FormGroup({
          id:new FormControl(data.id),
          Nombre:new FormControl(data.Nombre),
          Tipo:new FormControl(data.Tipo),
          Cantidad:new FormControl(data.Cantidad),
          PrecioUnitario:new FormControl(data.PrecioUnitario),

        });
      });
    }
  }
}
