import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',    
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.sass'
})
export class BasicFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    number: new FormControl(123),
    category: new FormControl('category-2'),
    tag: new FormControl(['tag-1', 'tag-2']),
    agree: new FormControl(false),
    idType: new FormControl(''),
    zone: new FormControl('')
  });    
 
  save(event : Event){
    console.log(this.form.value);
    console.log(event);
  }

  get nameField(){
    return this.form.get('name') ?? new FormControl();
  }

  get emailField(){
    return this.form.get('email') ?? new FormControl();
  }

  get phoneField(){
    return this.form.get('phone') ?? new FormControl();
  }

  get colorField(){
    return this.form.get('color') ?? new FormControl();
  }

  get dateField(){
    return this.form.get('date') ?? new FormControl();
  }

  get numberField(){
    return this.form.get('number') ?? new FormControl();
  }

  get categoryField(){
    return this.form.get('category') ?? new FormControl();
  }

  get tagField(){
    return this.form.get('tag') ?? new FormControl();
  }

  get agreeField(){
    return this.form.get('agree') ?? new FormControl();
  }

  get idTypeField(){
    return this.form.get('idType') ?? new FormControl();
  }

  get zoneField(){
    return this.form.get('zone') ?? new FormControl();
  }

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
