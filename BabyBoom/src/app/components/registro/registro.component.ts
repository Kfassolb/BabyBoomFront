import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router){

  }
  registerform = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-ZñÑ0-9]+$')])),
    name: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])), //para validar que ingrese una contraseña fuerte
  });

  proceedregisteration(){
    if(this.registerform.value.id && this.registerform.value.name && this.registerform.value.password){ //if(this.registerform.value.id) devolverá false si id es null, undefined, NaN, 0, false o una cadena vacía (''), y true en cualquier otro caso.
      if(this.registerform.controls.password.valid){
        this.service.proceedRegister(this.registerform.value).subscribe(res=>{
          this.toastr.success('Registered Successfully');
          this.router.navigate(['login']);
        });
      }else{
        this.toastr.warning('Por favor ingrese una contraseña segura');
      }
    }else{
      this.toastr.warning('Por favor ingrese toda la información solicitada');
    }
  }
}
