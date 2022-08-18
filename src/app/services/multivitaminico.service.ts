import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Multivitaminico } from '../models/multivitaminico.model';

@Injectable({
  providedIn: 'root'
})
export class MultivitaminicoService {

  constructor() { }

  multi1: Multivitaminico;
  multi2: Multivitaminico;

  private multivitaminico2Source = new Subject<Multivitaminico>();

  multivitaminico2Selected = this.multivitaminico2Source.asObservable();

  private multivitaminico1Source = new Subject<Multivitaminico>();

  multivitaminico1Selected = this.multivitaminico1Source.asObservable();


  forwarMultivitaminico2(multivitaminico: Multivitaminico) {
    this.multivitaminico2Source.next(multivitaminico);
  } 

  forwarMultivitaminico1(multivitaminico: Multivitaminico) {
    this.multivitaminico1Source.next(multivitaminico);
  } 


}
