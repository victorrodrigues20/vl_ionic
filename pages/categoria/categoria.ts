import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categorias';
import { HomePage } from '../home/home';
import { EducacaoPage } from '../educacao/educacao';
import { SustentabilidadePage } from '../sustentabilidade/sustentabilidade';
import { AmbientePage } from '../ambiente/ambiente';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {

  // items = [];

  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams, 
    categoriaProvider: CategoriaProvider) {
  }

  goToEducacaoPage(){
    this.navCtrl.push(EducacaoPage);
  }

  goToSustentabilidadePage(){
    this.navCtrl.push(SustentabilidadePage);
  }

  goToAmbientePage(){
    this.navCtrl.push(AmbientePage);
  }
        
  //   this.items = categoriaProvider.getCategorias();

  //   console.log(this.items);
  // }

}




