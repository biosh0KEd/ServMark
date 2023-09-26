import { Component } from '@angular/core';
import { Product as Product1 } from './product.model';
import { Product } from './models/product.model';

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
  products1: Product1[] = [
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


  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  onRegister() {
    console.log(this.register);
  }


  imgParent: string = 'https://www.w3schools.com/howto/img_avatar.jpg';

  onLoaded(img: string) {
    console.log('Imagen cargada en padre. ' + img);
  }

  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg'      
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'      
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: '../assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg'
    }
  ]
}
