import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{
  form: FormGroup =new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje: String = "";

  id:string ="";
  edicion:boolean = false;

  constructor(private uS:UsuarioService, private router:Router, private route:ActivatedRoute){};

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id']!=null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      password: new FormControl(),
    })
  }
  aceptar():void {
    this.usuario.id = this.form.value['id'];
    this.usuario.name = this.form.value['name'];
    this.usuario.password = this.form.value['password'];

    if (this.form.value['name'].length>0 && this.form.value['password'].length>0) {
      if (this.edicion) {
        this.uS.update(this.usuario).subscribe(()=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }else {
        this.uS.insert(this.usuario).subscribe(data=>{
          this.uS.list().subscribe (data=>{
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['Usuario']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }

  init(){
    if(this.edicion){
      this.uS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          name:new FormControl(data.name),
          password:new FormControl(data.password),
        });
      });
    }
  }
}
