import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { Multivitaminico } from '../models/multivitaminico.model';
import { Nutrientes } from '../models/nutrientes.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  multi1: Multivitaminico;
  multi2: Multivitaminico;

  ngOnInit(): void {
  }

  // multivitaminicos: Multivitaminico[] = [ 
  //   {
  //     "id": 1,
  //     "nome": "Centrum",
  //     "pathToImg": "../../../assets/centrum-de-a-a-zinco-com-150-comprimidos-cf2.jpeg",
  //     "tamanho": 1.320,
  //     "nutrientes": new [30, 14, 87, 7, 130, 34, 900, 45, 600, 0, 5, 6.7, 65, 1.2, 1.3, 16]
  //   },
  //   {
  //     "id": 2,
  //     "nome": "Multi Growth Supplements",
  //     "pathToImg": "../../../assets/multivitaminico-120-caps-nova-f-rmula-growth-supplements.jpeg",
  //     "tamanho": 1.320,
  //     "nutrientes": new Nutrientes(18, 8.1, 100, 7, 33, 20, 450, 23, 400, 0, 0, 0, 0, 0, 0, 0)
  //   },
  //   {
  //     "id": 3,
  //     "nome": "Poli Vitaly",
  //     "pathToImg": "../../../assets/poli-vitaly.jpeg",
  //     "tamanho": 1.320,
  //     "nutrientes": new Nutrientes(18, 8.1, 100, 7, 33, 20, 450, 23, 400, 0, 0, 0, 0, 0, 0, 0)
  //   }
  // ];

    multivitaminicos: Multivitaminico[] = [
      new Multivitaminico(1, "Centrum", "../../../assets/centrum-de-a-a-zinco-com-150-comprimidos-cf2.jpeg", 1.320, 30, 14, 87, 7, 130, 34, 900, 45, 600, 0, 5, 6.7, 65, 1.2, 1.3, 16),
      new Multivitaminico(2, "Multi Growth Supplements", "../../../assets/multivitaminico-120-caps-nova-f-rmula-growth-supplements.jpeg", 1.320, 18, 8.1, 100, 7, 33, 20, 450, 23, 400, 0, 0, 0, 0, 0, 0, 0),

    ];

  onSelectedMulti1(id: number) {
    this.multi1 = this.multivitaminicos[id-1];
  }

  onSelectedMulti2(id: number) {
    this.multi2 = this.multivitaminicos[id-1];
  }

}
