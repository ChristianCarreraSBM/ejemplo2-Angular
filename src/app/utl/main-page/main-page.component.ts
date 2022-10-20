import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../interfaces/alumnos-utl';
import { UtlService } from '../services/utl.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
 /*  alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'mario',
      edad:22
    },
    {
      nombre:'Veronica',
      edad:25
    },
    {
      nombre:'Luis',
      edad:27
    }
  ] */
  registroAlum:AlumnosUtl={
    nombre:'',
    edad:0,
  }

  constructor() { }

  /* agregarNuevoAlumno(argumento:AlumnosUtl){
    this.alumnosUtl.push(argumento);
    this.UtlService.muestra();
  } */

  /* agregar():void{
    console.log(this.registroAlum);
    this.alumnosUtl.push(this.registroAlum);
    this.registroAlum={
      nombre:'',
      edad:0
    }
  } */

  

  ngOnInit(): void {
  }

}
