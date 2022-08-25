import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Multivitaminico } from 'src/app/models/multivitaminico.model';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  @Input()
  multi1: Multivitaminico;
  @Input()
  multi2: Multivitaminico;


  ngOnChanges() {
    this.reloadChart();
    this.chart?.chart?.update();
  }

  constructor() { }

  // ngOnInit(): void {
  //   this.reloadChart();
  // }

  private reloadChart() {
    this.barChartData.datasets = [];
    this.barChartData.labels = [];
    let valorNutrientesMult1: any = [];
    this.multi1.nutrientes.forEach(nutriente => {
      this.barChartData.labels?.push(nutriente.label);
      valorNutrientesMult1.push(nutriente.valor);
    });
    this.barChartData.datasets.push({data: valorNutrientesMult1, label: this.multi1.nome});

    let valorNutrientesMult2: any = []
    this.multi2.nutrientes.forEach(nutriente => {
      valorNutrientesMult2.push(nutriente.valor);
    });
    this.barChartData.datasets.push({data: valorNutrientesMult2, label: this.multi2.nome});
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
      },
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    ChartDataLabels
  ];

  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
