import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/services/movie';
import { IonContent, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonItem, IonNote, IonIcon, IonChip } from '@ionic/angular/standalone';
import { IPeliculaCreditos, IPeliculaDetalle } from 'src/app/models/movies.models';
import { ImagenPipe } from 'src/app/pipes/imagen-pipe';
import { addIcons } from 'ionicons';
import { peopleOutline, thumbsUp, add, arrowBackOutline, starOutline } from 'ionicons/icons';
import { SlicePipe } from '@angular/common';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: true,
   imports: [IonContent, IonLabel, ImagenPipe, IonGrid, IonRow, IonCol, IonCard, IonItem, IonLabel, IonNote, IonIcon, SlicePipe,IonChip ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  })
export class DetalleComponent  implements OnInit, AfterViewInit {
  @Input() id?: number;
  private peliSer = inject(Movie);
  detallePelicula: IPeliculaDetalle = {};
  peliCreditos: IPeliculaCreditos = {};
  ocultar : number = 150;
@ViewChild('swiperActores', { static: false }) swiperActores!: ElementRef;
   private sliderOpts: SwiperOptions = {
      slidesPerView: 3.3,
      breakpoints: {
        520: { slidesPerView: 5.2}
      },
      freeMode: true,
      loop: false
      };

  constructor() {
    addIcons({thumbsUp,peopleOutline,arrowBackOutline,add, starOutline});
  }

  ngOnInit() {
    console.log("id recibido: "+ this.id);
    this.peliSer.getDetallePelicula(this.id!)
    .subscribe(resp=>{
      this.detallePelicula = resp;
    });
    this.peliSer.getPeliculaCreditos(this.id!)
    .subscribe(resp=>{
      this.peliCreditos=resp;
    });
  }

  ngAfterViewInit() {
    const sliderElem = this.swiperActores.nativeElement;
    Object.assign(sliderElem!, this.sliderOpts);
    sliderElem!.initialize();
  }
  regresar(){
   history.back();

  }

}
