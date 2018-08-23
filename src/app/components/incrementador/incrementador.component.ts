import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  @ViewChild( 'inputProgress' ) inputProgress:ElementRef;

  @Input() progress: number = 50;
  @Input() leyenda:string = "leyenda";

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor ){
  	if ( this.progress >= 100 && valor > 0){
  		this.progress = 100;
  		return ;
  	}
  	if ( this.progress <= 0 && valor < 0 ){
  		this.progress = 0;
  		return ;
  	}
  	this.progress = this.progress + valor;

  	this.cambioValor.emit( this.progress );

  	this.inputProgress.nativeElement.focus();
  }

  change( newValue:number ){
  	//let element:any = document.getElementsByName( 'progress' );


  	if ( newValue >= 100) {
  		this.progress = 100;
  	}else if( newValue <= 0 ){
  		this.progress = 0;
  	}else{
  		this.progress = newValue;
  	}

  	this.inputProgress.nativeElement.value = this.progress;
  	//element.value = this.progress;


  	this.cambioValor.emit( this.progress );
  }

}
