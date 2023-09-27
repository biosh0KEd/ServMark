import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault: string = '../../../assets/images/album.jpg';
  

  ngOnInit(): void {
    
  }


  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Imagen cargada en Hijo.');
    this.loaded.emit(this.img);
  }
}
