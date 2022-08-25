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
    new Multivitaminico(0, "Centrum de A a Zinco", "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/pt_BR/sliced-images/global/products/ct-centrum-adulto30c-442_287.png?auto=format", 1.320, 30, 18, 8.1, 100, 7, 33, 20, 450, 23, 400, 5, 6.7, 65, 1.2, 1.3, 16, 5, 1.3, 240, 2.4, 30, 0),
    new Multivitaminico(1, "Centrum Essentials Homem", "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/pt_BR/sliced-images/global/products/ct-essentials-homee30-225_225.png?auto=format", 1.320, 30, 26, 7, 130, 7, 33, 20, 450, 23, 510, 5, 6.7, 33, 1.2, 1.3, 16, 4.7, 1.3, 240, 2.4, 30, 0),
    new Multivitaminico(2, "Centrum Essentials Mulher", "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/pt_BR/sliced-images/global/products/ct-essentials-mulher30-225_225.png?auto=format", 1.320, 30, 26, 11, 99, 7, 33, 20, 450, 23, 420, 5, 6.7, 26, 1.2, 1.3, 16, 4.7, 1.3, 240, 2.4, 30, 0),
    new Multivitaminico(3, "Multi Growth Supplements", "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/produto-principal.png", 0.7, 120, 35, 14, 87, 7, 130, 34, 900, 45, 600, 5, 10, 65, 1.2, 1.3, 16, 5, 1.3, 240, 2.4, 30, 12),

  ];

  ngOnInit(): void {
  }


  onSelectedMulti1(id: number) {
    this.multi1 = this.multivitaminicos[id];
  }

  onSelectedMulti2(id: number) {
    this.multi2 = this.multivitaminicos[id];
  }

}
