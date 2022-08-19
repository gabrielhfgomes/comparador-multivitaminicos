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

  multi1: Multivitaminico;
  multi2: Multivitaminico;
  multivitaminicos: Multivitaminico[] = [
    new Multivitaminico(1, "Centrum", "../../../assets/centrum-de-a-a-zinco-com-150-comprimidos-cf2.jpeg", 1.320, 30 ,30, 14, 87, 7, 130, 34, 900, 45, 600, 5, 6.7, 65, 1.2, 1.3, 16, 5, 1.3, 240, 2.4, 30, 0),
    new Multivitaminico(2, "Multi Growth Supplements", "../../../assets/multivitaminico-120-caps-nova-f-rmula-growth-supplements.jpeg", 0.7, 120, 35, 14, 87, 7, 130, 34, 900, 45, 600, 5, 10, 65, 1.2, 1.3, 16, 5, 1.3, 240, 2.4, 30, 12),

  ];

  ngOnInit(): void {
  }


  onSelectedMulti1(id: number) {
    this.multi1 = this.multivitaminicos[id-1];
  }

  onSelectedMulti2(id: number) {
    this.multi2 = this.multivitaminicos[id-1];
  }

}
