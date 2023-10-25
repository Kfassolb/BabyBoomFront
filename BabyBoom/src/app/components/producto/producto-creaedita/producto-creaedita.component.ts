import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/model/Producto';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-producto-creaedita',
  templateUrl: './producto-creaedita.component.html',
  styleUrls: ['./producto-creaedita.component.css']
})
export class ProductoCreaeditaComponent implements OnInit{
  id:string="";
  edicion:boolean=false;
  form:FormGroup = new FormGroup({});
  producto:Producto = new Producto();
  mensaje:string = "";
  maxFecha:Date = moment().add(-1, 'days').toDate();
  constructor(private pS:ProductoService, private router:Router, private route:ActivatedRoute, private toastr:ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion= data['id']!=null;
      this.init();
    });

    this.form = new FormGroup({
      id:new FormControl(),
      Nombre:new FormControl(),
      Tipo:new FormControl(),
      Cantidad:new FormControl(),
      PrecioUnitario:new FormControl(),

    })
  }
  aceptar():void{
    this.producto.id = this.form.value['id'];
    this.producto.Nombre = this.form.value['Nombre'];
    this.producto.Tipo = this.form.value['Tipo'];
    this.producto.Cantidad = this.form.value['Cantidad'];
    this.producto.PrecioUnitario = this.form.value['PrecioUnitario'];

    let tipo = this.form.value['Tipo'];
    let id = this.form.value['id'];
    let cantidad = this.form.value['Cantidad'];
    let precio = this.form.value['PrecioUnitario'];
    let esTipoValido = tipo != null && tipo.length >= 5 && tipo.length <= 15 && /^[a-zA-ZñÑ ]+$/.test(tipo);
    let esIdValido = id!=null && id.length>0 && !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(id)
    let esCantidadValido = cantidad>0 && /^[0-9]+$/.test(cantidad);
    let esPrecioValido = precio>0 && /^[0-9]+$/.test(precio);

    if(esTipoValido){
      if(esCantidadValido){
        if(esPrecioValido){
          if(this.edicion){
            this.pS.update(this.producto).subscribe(()=>{
              this.pS.list().subscribe(data=>{
                this.pS.setList(data);
              });
            });
            this.router.navigate(['Producto']);
            this.toastr.success('Actualizado correctamente');
          }else{
            if(esIdValido){
                  this.pS.insert(this.producto).subscribe(data=>{
                    this.pS.list().subscribe(data=>{
                      this.pS.setList(data);
                    })
                  })
                  this.router.navigate(['Producto']);
                  this.toastr.success('Registro realizado con éxito');
            }else{
              this.toastr.warning('ID: Debe contener unicamente números y letras');
            }
          }
        }else{
          this.toastr.warning('Precio Unitario ingresado inválido');
        }
      }else{
        this.toastr.warning('Cantidad ingresada inválida. Debe ser solo número y no debe ser negativo');
      }
    }else{
      this.toastr.warning('Tipo: Debe contener únicamente letras entre 5 y 15 caracteres');
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
