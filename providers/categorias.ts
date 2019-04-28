import { Injectable } from '@angular/core';
//import {ILivro} from "../interfaces/ICategoria";

@Injectable()
export class CategoriaProvider {

  items = [];

  constructor() {

  }

  // getCategorias() {
  //   this.items = [];
  //   this.items.push(
  //     {title: 'Terror', note: '15', icon: '', cor: 'dark'},
  //     {title: 'Romance', note: '10', icon: '', cor: 'danger'},
  //     {title: 'Suspense', note: '8', icon: '', cor: 'light'},
  //   );

  //   return this.items;
  // }


}