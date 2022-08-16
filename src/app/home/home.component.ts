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
  }

}
