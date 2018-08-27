import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []

})
export class AccountSettingsComponent implements OnInit {

  constructor( 
  	@Inject( DOCUMENT ) private _document,
  	public _ajustes: SettingsService
  ) { }

  ngOnInit() {
  	this.colorcarCheck();
  }

  cambiarColor( tema:string, link: any ){
  	this.cambiarCheck( link );
  	this._ajustes.aplicarTema( tema );
  }

  cambiarCheck( link ){
  	let selectores = this._document.getElementsByClassName( 'selector' );
  	for( let ref of selectores ){
  		ref.classList.remove( 'working' );
  	}
  	link.classList.add( 'working' );
  }

  colorcarCheck(){
  	let selectores = this._document.getElementsByClassName( 'selector' );
  	let tema = this._ajustes.ajustes.tema;

  	for( let ref of selectores ){
  		if ( ref.getAttribute( 'data-theme' ) == tema ) {
  			ref.classList.add( 'working' );
  			break;
  		}
  	}
  }

}
