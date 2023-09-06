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
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])), //para validar que ingrese una contraseña fuerte
  });

  proceedregisteration(){
    if(this.registerform.valid){
      this.service.proceedRegister(this.registerform.value).subscribe(res=>{
        this.toastr.success('Registered Successfully');
        this.router.navigate(['login']);
      });
    }else{
      this.toastr.warning('Please enter a strong password');
    }
  }
}
