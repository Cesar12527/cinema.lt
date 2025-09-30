import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICarteleraTMDB, IResponsMoviesTMDB } from '../models/movies.models';
import { environment } from 'src/environments/environment.prod';


const URL = environment.url;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class Movie {

  private http = inject(HttpClient);
  private popularPage = 0;

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query+='&language=es-PE&api_key='+API_KEY;
    return this.http.get<T>(query);
  }
  getMovie(){
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const ultimoDiaMes = new Date(hoy.getFullYear(), hoy.getMonth()+1, 0).getDate();
    const nrMes = hoy.getMonth()+1;

    let srtMes=(nrMes<10)?'0' + nrMes : nrMes;

    const fecha_inicio = anio+'-'+srtMes+'-01';
    const fecha_fin=anio+'-'+srtMes+'-'+ultimoDiaMes;
    return this.ejecutarQuery<IResponsMoviesTMDB >("/discover/movie?primary_release_date.gte="+fecha_inicio+"&primary_release_date.lte="+fecha_fin);
  }

  getCartelera(){
    return this.ejecutarQuery<ICarteleraTMDB>("/movie/now_playing?1");
  }

  getPopulares(){
    this.popularPage++;
    return this.ejecutarQuery<IResponsMoviesTMDB>("/movie/popular?page="+this.popularPage);
  }

}
