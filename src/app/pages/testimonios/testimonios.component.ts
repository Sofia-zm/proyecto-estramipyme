import { Component } from '@angular/core';
import{ MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [MenuComponent, FooterComponent ],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {

}

