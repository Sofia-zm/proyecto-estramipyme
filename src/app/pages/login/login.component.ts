import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private apiUser = inject(UserService)
  private navega = inject(Router);

  redirectTo: string = "/home"

  correoC = new FormControl('');
  contrasenaC = new FormControl('');
  dataUser: any = {};

  inicioUsuario() {
    this.dataUser = {
      "email": this.correoC.value,
      "password": this.contrasenaC.value
    }

    this.apiUser.authUser(this.dataUser).subscribe(
      data => {
        console.log(data);
        alert("Bienvenido(a)")
        localStorage.setItem('tokenUserPrueba', data.access_toke)
        this.navega.navigate(['/inicio']);
      }, (error) => {
        console.error('Error de autenticacion', error)
        if(error.status == 401){
          alert("Error en sus credenciales, intenta nuevamente")
          this.navega.navigate(['/inicio', {param: 3}]);
          
          
        }
      }
    )
  }
}