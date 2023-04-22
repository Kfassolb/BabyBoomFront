import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiposuscripcion',
  templateUrl: './tiposuscripcion.component.html',
  styleUrls: ['./tiposuscripcion.component.css']
})
export class TiposuscripcionComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public route:ActivatedRoute){}

}
