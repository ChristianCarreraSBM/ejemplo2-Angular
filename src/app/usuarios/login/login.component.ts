import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {primeraLetraMayuscula} from '../validators/primeraLetraMayuscula';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBulider:FormBuilder) { }
  form = new FormGroup({
    nombre: new FormControl('',[Validators.minLength(2), Validators.required]),
    password: new FormControl('',[Validators.required]),
  })


  ngOnInit(): void {
    // this.form=this.formBulider.group({
    //   nombre:['',{
    //     validators:[Validators.required, Validators.minLength(3),primeraLetraMayuscula()]
    //   }],
    //   password:['',{
    //     validators:[Validators.required]
    //   }],
    // })
  }

  guardarUsuario(){
    console.log('registro guardado');
  }
  obtenerErrorCampo(){
    var nom=this.form.get('nombre');
    var pass=this.form.get('password');
    if(nom.hasError('required')){
      return 'El compo password es requerido';
    }
    if(nom.hasError('minlength')){
      return 'La longitud minima de 3 caracters';
    }
    if(nom.hasError('primeraLetraMayuscula')){
      return nom.getError('primeraLetraMayuscula').mensaje;
    }
    if(nom.hasError('required')){
      return 'El campo password es requerido';
    }
  }
}
