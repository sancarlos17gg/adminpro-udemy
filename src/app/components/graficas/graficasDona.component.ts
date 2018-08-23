import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './graficasDona.component.html'
})
export class GraficasDonaComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  @Input() graficoData: any ;
  
 
  constructor() { }

  ngOnInit() {

  }

  

}
