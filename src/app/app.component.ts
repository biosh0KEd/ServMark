import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'serv-mark';
  name: string = '';
  widthImg: number = 10;
  imageUrl: string = '../assets/images/toy.jpg';
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
      category: 'Juguetes'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'      
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: '../assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '../assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/glasses.jpg'
    }
  ];

}
