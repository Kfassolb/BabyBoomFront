import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiposuscripcion',
  templateUrl: './tiposuscripcion.component.html',
  styleUrls: ['./tiposuscripcion.component.css']
})
export class TiposuscripcionComponent implements OnInit{
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  constructor(public route:ActivatedRoute){}

}
