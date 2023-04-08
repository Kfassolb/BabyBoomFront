import { Component, OnInit } from '@angular/core';
import { LoginInfo } from 'src/app/model/LoginInfo';
import { MatTableDataSource } from '@angular/material/table'
import { LoginInfoService } from 'src/app/service/login-info.service';

@Component({
  selector: 'app-login-info-listar',
  templateUrl: './login-info-listar.component.html',
  styleUrls: ['./login-info-listar.component.css']
})

export class LoginInfoListarComponent implements OnInit{
  lista: LoginInfo[]=[];
  dataSource: MatTableDataSource<LoginInfo>=new MatTableDataSource();
  displayedColumns: string[]=['id','username','password'];

  constructor(private lgS: LoginInfoService){}

  ngOnInit(): void {
    this.lgS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
