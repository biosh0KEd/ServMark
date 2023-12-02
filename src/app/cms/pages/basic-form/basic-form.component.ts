import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',    
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.sass'
})
export class BasicFormComponent implements OnInit {
  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  numberField = new FormControl(123);

  categoryField = new FormControl('category-2');
  tagField = new FormControl(['tag-1', 'tag-2']);

  agreeField = new FormControl(false);
  idTypeField = new FormControl('');
  zoneField = new FormControl('');

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue(){
    console.log(this.nameField.value);
  }

  get isNameFieldValid(){
    return this.nameField.touched && this.nameField.status === 'VALID';
  }

  get isNameFieldInvalid(){
    return this.nameField.touched && this.nameField.status === 'INVALID';
  }
}
