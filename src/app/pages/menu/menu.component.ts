import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  sesion=false;

  ngOnInit(){
    if(localStorage.getItem('tokenUserPrueba')==null){
      this.sesion=false;
    }else{
      this.sesion=true;
    }
  }


  cerrarS(){
    localStorage.removeItem('tokenUserPrueba');
    alert('sesion cerrada');
  }

}
