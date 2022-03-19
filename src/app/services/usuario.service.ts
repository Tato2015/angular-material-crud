import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: 'gachuy', nombre: 'Geraldo', apellido: 'Achuy', sexo: 'Masculino'},
    {usuario: 'eachuy', nombre: 'Edson', apellido: 'Achuy', sexo: 'Masculino'},
    {usuario: 'jachuy', nombre: 'Josemaria', apellido: 'Achuy', sexo: 'Masculino'},
    {usuario: 'fachuy', nombre: 'Felipe', apellido: 'Achuy', sexo: 'Masculino'},
    {usuario: 'dmolina', nombre: 'Delia', apellido: 'Molina', sexo: 'Femenino'},
    {usuario: 'wpaucar', nombre: 'Wendy', apellido: 'Paucar', sexo: 'Femenino'},
    {usuario: 'jaachuy', nombre: 'Jason', apellido: 'Achuy', sexo: 'Masculino'},
    {usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'ularci', nombre: 'Ursula', apellido: 'Larci', sexo: 'Femenino'},
    {usuario: 'rsanchez', nombre: 'Ramon', apellido: 'Sanchez', sexo: 'Masculino'},
  ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listaUsuarios.splice(index,1);
  }
  
  agregarUsuario(usuario:Usuario){
    this.listaUsuarios.unshift(usuario);
  }

}
