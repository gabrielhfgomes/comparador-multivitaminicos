import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Multivitaminico } from 'src/app/models/multivitaminico.model';
import { Nutrientes } from 'src/app/models/nutrientes.model';

@Component({
  selector: 'app-multivitaminico',
  templateUrl: './multivitaminico.component.html',
  styleUrls: ['./multivitaminico.component.css']
})
export class MultivitaminicoComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  multi1: Multivitaminico;
  filteredMulti: Observable<Multivitaminico[]>;
  myControl = new FormControl();

  multivitaminicos: Multivitaminico[] = [ 
    {
      "id": 1,
      "nome": "Centrum",
      "pathToImg": "../../../assets/centrum-de-a-a-zinco-com-150-comprimidos-cf2.jpeg",
      "nutrientes": new Nutrientes(30, 0, 0, 0)
    },
    {
      "id": 2,
      "nome": "Multi Growth Supplements",
      "pathToImg": "../../../assets/multivitaminico-120-caps-nova-f-rmula-growth-supplements.jpeg",
      "nutrientes": new Nutrientes(0, 0, 0, 0)
    }
  ];
  
  ngOnInit(): void {
    this.filteredMulti = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      )
  }

  private _filter(value: string): Multivitaminico[] {
    const filterValue = value.toLowerCase();
    return this.multivitaminicos.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  chooseMulti(optionSelected: any) {
    let multi = this.multivitaminicos.find(multi => multi.nome == optionSelected.option.value);
    if(!!multi) {
      this.multi1 = multi;
    }
  }

}
