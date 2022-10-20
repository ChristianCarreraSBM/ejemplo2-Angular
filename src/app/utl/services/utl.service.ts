import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/alumnos-utl';

@Injectable({
  providedIn: 'root'
})
export class UtlService {
  
  private _alumnosUtl:AlumnosUtl[]=[
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
  ]  

  get alumnosUtl():AlumnosUtl[]{
    return [...this._alumnosUtl];
  }
  
  constructor() { }

  agregarNuevoAlumno(argumento:AlumnosUtl){
    this._alumnosUtl.push(argumento);
    
  }
  muestra(){
    console.log('nombre');
  }
}
