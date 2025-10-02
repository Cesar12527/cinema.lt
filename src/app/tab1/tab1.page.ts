import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';


import{Movie} from '../services/movie';


import { ICarteleraTMDB, IMovies, IResponsMoviesTMDB } from '../models/movies.models';
import { SliderPelisBackdropComponent } from '../components/slider-pelis-backdrop/slider-pelis-backdrop.component';
import { SliderPosterComponent } from '../components/slider-poster/slider-poster.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ SliderPelisBackdropComponent, SliderPosterComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page implements OnInit {
  private movieService = inject(Movie);
peliculasRecientes: IMovies[] = [];
pelisCartelera: IMovies[] = [];
peliculasPopulares: IMovies[] = [];

  constructor() {}

  ngOnInit(){


    this.movieService.getMovie()
    .subscribe((resp:IResponsMoviesTMDB)=>{
      this.peliculasRecientes = resp.results;
    });



    this.movieService.getCartelera()
    .subscribe((resp:ICarteleraTMDB)=>{
      this.pelisCartelera = resp.results;
    });

this.cargarPopulares();

  }

  cargarPopulares(){
 this.movieService.getPopulares()
    .subscribe((resp:IResponsMoviesTMDB)=>{
      this.peliculasPopulares = [... this.peliculasPopulares, ...resp.results];
    });
  }
}
