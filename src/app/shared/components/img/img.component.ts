import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent {
  @Input() img = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = '../../../assets/images/album.jpg';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Imagen cargada en Hijo.');
    this.loaded.emit(this.img);
  }
}
