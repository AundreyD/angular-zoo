import { Component, OnInit } from '@angular/core';
import { ZooService} from '../zoo.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.sass']
})
export class AnimalListComponent implements OnInit {

  constructor(private animals:ZooService) {
    this.animals = animals;

  }

  ngOnInit() {
  }

}
