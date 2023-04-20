import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/model/Servicio';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioCompoment implements OnInit{

  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}
  }
