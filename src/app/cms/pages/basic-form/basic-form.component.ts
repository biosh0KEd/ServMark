import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',    
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.sass'
})
export class BasicFormComponent implements OnInit {
  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  numberField = new FormControl(123);

  categoryField = new FormControl('category-2');
  tagField = new FormControl(['tag-1', 'tag-2']);

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue(){
    console.log(this.nameField.value);
  }

}
