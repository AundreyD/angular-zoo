import { Component, OnInit } from '@angular/core';
import { ZooService} from '../zoo.service';

@Component({
  selector: 'app-animal-blocks',
  templateUrl: './animal-blocks.component.html',
  styleUrls: ['./animal-blocks.component.sass']
})
export class AnimalBlocksComponent implements OnInit {

  constructor(private animals:ZooService) {
    this.animals = animals;
  }

  quantityDown(val){
    val.quantity --;
  }
   quantityUp(val){
     console.log(val)
     val.quantity ++

  }
  ngOnInit() {
    console.log(this.animals)
  }

}
