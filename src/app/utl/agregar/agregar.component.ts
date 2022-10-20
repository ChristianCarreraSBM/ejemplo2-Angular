import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../interfaces/alumnos-utl';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

//@Input() alumnosUtl:AlumnosUtl[]=[];
@Input() registroAlum:AlumnosUtl={
  nombre:'',
  edad:0,
};

constructor(private utlservice:UtlService){}
//@Output() onNuevoAlumno:EventEmitter<AlumnosUtl>=new EventEmitter();

agregar():void{
  console.log(this.registroAlum);
  //this.alumnosUtl.push(this.registroAlum);
  //this.onNuevoAlumno.emit(this.registroAlum);
  this.utlservice.agregarNuevoAlumno(this.registroAlum);
  this.registroAlum={
    nombre:'',
    edad:0
  }
}


}
