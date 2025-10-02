import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonCol, IonGrid, IonRow, IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSpinner, IonList,IonItem, IonLabel, IonListHeader} from '@ionic/angular/standalone';
import { Movie } from '../services/movie';
import { IMovies } from '../models/movies.models';
import { ImagenPipe } from '../pipes/imagen-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonCol, IonGrid, IonRow, IonCard, IonImg, ImagenPipe, IonCardHeader, IonCardSubtitle, IonCardTitle, DatePipe, IonSpinner, IonList,IonItem, IonLabel, IonListHeader ]
})
export class Tab2Page {
  textoBuscar : string = '';
  cargando : boolean = false;
  peliculasEncontradas: IMovies[] = [];
  private moviesService = inject(Movie);
  ideasBusq : string[] = ['Spiderman', 'Avengers', 'El señor de los anillos', 'Rockstar', 'The dirt', 'One Piece Film Red']

  constructor() {}

buscarPeliculasXTitulo(titulo: string){

    this.moviesService.buscarPeliculas(titulo)
    .subscribe(resp => {
      console.log(resp);
      this.peliculasEncontradas = resp.results;
      this.cargando = false;  })
}

  buscarPeliculas($ev : any){
    const valor = $ev.detail.value;
    this.cargando = true;
this.buscarPeliculasXTitulo(valor);

  }
 ClickIdea(){
  const valor = this.textoBuscar;
  this.buscarPeliculasXTitulo(valor);

 }
}
