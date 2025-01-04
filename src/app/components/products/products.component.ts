import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  toys = [
    {
      name: 'Creative Building Blocks',
      description: 'Encourage imagination and problem-solving with these colorful blocks.',
      image: 'assets/toy2.jpg'
    },
    {
      name: 'STEM Robotics Kit',
      description: 'Introduce coding and robotics to kids in a fun and engaging way.',
      image: 'assets/toy1.jpg'
    },
    {
      name: 'Puzzle Adventures',
      description: 'Boost cognitive skills with puzzles designed for curious minds.',
      image: 'assets/toy3.jpg'
    }
  ];
}
