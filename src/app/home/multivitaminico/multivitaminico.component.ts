import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { Multivitaminico } from 'src/app/models/multivitaminico.model';
import { MultivitaminicoService } from 'src/app/services/multivitaminico.service';

@Component({
  selector: 'app-multivitaminico',
  templateUrl: './multivitaminico.component.html',
  styleUrls: ['./multivitaminico.component.css']
})
export class MultivitaminicoComponent implements OnInit {
  multi1: Multivitaminico;
  otherMulti: Multivitaminico;
  filteredMulti: Observable<Multivitaminico[]>;
  myControl = new FormControl();
  @Output() multEmitter = new EventEmitter<number>();
  @Input() multivitaminicos: Multivitaminico[];
  @Input() multinumber: number;
  multivitaminicoService: MultivitaminicoService;
  selecioneMultivitaminicoLabel: string;

  subscription: Subscription;

  constructor(private formBuilder: FormBuilder, multivitaminicoService: MultivitaminicoService) { 
    this.multivitaminicoService = multivitaminicoService;
    this.subscription = multivitaminicoService.multivitaminico2Selected.subscribe(
      multivitaminico => {
        if(this.multinumber == 1) {
          this.otherMulti = multivitaminico
          this.otherMulti.calculatePercentual(this.multi1);
        } 
      });

    this.subscription = multivitaminicoService.multivitaminico1Selected.subscribe(
      multivitaminico => {
        if(this.multinumber == 1) {
          this.otherMulti = multivitaminico
          this.otherMulti.calculatePercentual(this.multi1);
        }
      });
  }


  ngOnInit(): void {
    this.filteredMulti = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      )
      this.selecioneMultivitaminicoLabel = "Selecione o Multivitamínico " + this.multinumber + ":";
  }

  private _filter(value: string): Multivitaminico[] {
    const filterValue = value.toLowerCase();
    return this.multivitaminicos.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  chooseMulti(optionSelected: any) {
    let multi = this.multivitaminicos.find(multi => multi.nome == optionSelected.option.value);
    if(!!multi) {
      this.multi1 = multi;
      this.multEmitter.emit(multi.id);
      if(this.multinumber == 2) {
        this.multivitaminicoService.forwarMultivitaminico2(multi);
      } else {
        this.otherMulti.calculatePercentual(this.multi1);
      }
    }
  }

}
