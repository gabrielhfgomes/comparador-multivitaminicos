import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { Multivitaminico } from '../models/multivitaminico.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  multivitaminicos: Multivitaminico[];
  multi1: Multivitaminico;

  ngOnInit(): void {
    this.multivitaminicos = [ 
      {
        "id": 1,
        "nome": "Sentrum",
        "pathToImg": "../../assets/centrum-de-a-a-zinco-com-150-comprimidos-cf2.jpeg"
      }, 
      {
        "id": 2,
        "nome": "Multi Growth Supplements",
        "pathToImg": "../../assets/multivitaminico-120-caps-nova-f-rmula-growth-supplements.jpeg"
      }
    ]
  }

  chooseMulti(id: any) {
    let multi = this.multivitaminicos.find(multi => multi.id == id);
    if(!!multi) {
      this.multi1 = multi;
    }
  }

}
