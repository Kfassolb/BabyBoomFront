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

  id:number =0;
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
      Username: new FormControl(),
      Password: new FormControl(),
    })
  }
  aceptar():void {
    this.usuario.id = this.form.value['id'];
    this.usuario.Username = this.form.value['Username'];
    this.usuario.Password = this.form.value['Password'];

    if (this.form.value['Username'].length>0) {
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
      this.mensaje = "Ingrese el nombre de usuario!!";
    }
  }

  init(){
    if(this.edicion){
      this.uS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          Username:new FormControl(data.Username),
          Password:new FormControl(data.Password),
        });
      });
    }
  }
}
