import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipocomprobante',
  templateUrl: './tipocomprobante.component.html',
  styleUrls: ['./tipocomprobante.component.css']
})
export class TipocomprobanteComponent implements OnInit{
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}
}
