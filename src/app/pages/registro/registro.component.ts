import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  private apiUser = inject(UserService);
  private router = inject(Router);
  nombreC = new FormControl('');
  correoC = new FormControl('');
  contrasenaC = new FormControl('');
  confirmarContraC = new FormControl('');

  dataUsuario:any = {};

    registrarUsuario() {
      this.dataUsuario = {
        "nombre": this.nombreC.value,
        "correo": this.correoC.value,
        "contrasena": this.contrasenaC.value,
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/631.jpg"
      }
      
      this.apiUser.registerUser(this.dataUsuario).subscribe(
        data => {
          console.log(data);
          alert("Registro Exitoso")
          this.router.navigate(['/inicio'])
        }
      )
    }
  }


