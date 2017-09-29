import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators, FormControl} from '@angular/forms'
import {Http, Response} from '@angular/http';
import {ZooService} from '../zoo.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.sass']
})
export class AnimalFormComponent implements OnInit {
  animalForm: FormGroup;
  name: AbstractControl;
  species: AbstractControl;
  averageHeight: AbstractControl;
  averageWeight: AbstractControl;
  classification: AbstractControl;
  description:AbstractControl;
  imagePath:  AbstractControl;
  quantity: AbstractControl;


  constructor(fb: FormBuilder, private animals:ZooService) {
    this.animalForm = fb.group({
      name: ['',Validators.compose([
        Validators.required
      ])],
      species: ['',Validators.compose([
        Validators.required
      ])],
      averageHeight: ['',Validators.compose([
        Validators.required
      ])],
      averageWeight: ['',Validators.compose([
        Validators.required
      ])],
      classification: ['',Validators.compose([
        Validators.required
      ])],
      description: ['',Validators.compose([
          Validators.required,
          Validators.minLength(10),

        ])],
      imagePath: ['',Validators.compose([
        Validators.required,
        this.urlValidator
      ])],
      quantity: ['',Validators.compose([
        Validators.required
      ])]
    });
    this.name = this.animalForm.controls['name']
    this.species = this.animalForm.controls['species']
    this.averageHeight = this.animalForm.controls['averageHeight']
    this.averageWeight = this.animalForm.controls['averageWeight']
    this.classification = this.animalForm.controls['classification']
    this.description = this.animalForm.controls['description']
    this.imagePath = this.animalForm.controls['imagePath']
    this.quantity = this.animalForm.controls['quantity']
    this.animals = animals;
  }

  urlValidator(control: FormControl){
    if(!control.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)){
      return{invalidPath: true}
    }
  }

  onSubmit(value){
    console.log(value)
    //  fs.writeFile('../zoo.json', value, (err)=>{
    //   console.log(err)
    // })
    this.animals.zooAnimals.push(value)
    console.log('aimalzzzz:',this.animals)
    this.animalForm.reset()

  }
  isValidForm(){
    return this.animalForm.valid;
  }
  ngOnInit() {
    console.log(this.animals)
  }

}
