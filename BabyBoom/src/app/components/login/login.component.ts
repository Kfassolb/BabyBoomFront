import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router){
    sessionStorage.clear();
  }
  userdata:any;

  loginform = this.builder.group({
    id:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.required)
  })

  proceedlogin(){
    if(this.loginform.valid){
    //   this.service.proceedRegister(this.loginform.value).subscribe(res=>{
    //     this.toastr.success('Registered Successfully');
    //     this.router.navigate(['login']);
    //   });
    // }else{
    //   this.toastr.warning('Please enter a strong password');
    // }
      this.service.Getbycode(this.loginform.value.id).subscribe(res=>{ //el Getbycode obtiene los datos (json) del id ingresado ejem: http://localhost:3000/Usuario/chechito
        this.userdata=res;
        console.log(this.userdata);
        if(this.userdata.password === this.loginform.value.password){ // acá se compara lo que se tiene en el db.json con lo del formulario
          sessionStorage.setItem('username',this.userdata.id);
          this.router.navigate(['']);
        }else{
          this.toastr.error('Invalid credentials')
        }
      });
    }else{
      this.toastr.warning('Please enter the requested information')
    }
  }
}
