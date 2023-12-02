import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',    
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.sass'
})
export class BasicFormComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  constructor(
    private _formBuilder: FormBuilder
    ) {     
      this._buildForm();
  }
  save(event : Event){
    if (this.form.status === 'VALID'){
      console.log(this.form.value);
      console.log(event);
    }
    else {
      this.form.markAllAsTouched();
    }
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

  private _buildForm(){
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      phone: ['', [Validators.required]],
      color: ['#000000'],
      date: [''],
      number: [123],
      category: ['category-2'],
      tag: [['tag-1', 'tag-2']],
      agree: [false],
      idType: [''],
      zone: ['']
    });    
  }

}
