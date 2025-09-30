import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IMovies } from 'src/app/models/movies.models';
import { ImagenPipe } from 'src/app/pipes/imagen-pipe';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-slider-poster',
  templateUrl: './slider-poster.component.html',
  styleUrls: ['./slider-poster.component.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe]
})
export class SliderPosterComponent  implements AfterViewInit {
  @Input() peliculas : IMovies[] = [];
  @Input() cargarMas: boolean = false;
  @Output() cargarData = new EventEmitter();
  @ViewChild('swiperPoster', { static: false }) swiperPoster: any;
  private sliderOpts: SwiperOptions = {
    slidesPerView: 3.1,
    spaceBetween: -10,
    breakpoints: {
      200: { slidesPerView: 3.1},
      400: {slidesPerView: 3.4},
      620: {slidesPerView: 5.5},
      720: {slidesPerView: 6.2},
      1024: {slidesPerView: 7.5},
      1300: {slidesPerView: 10.1},
      1920: {slidesPerView: 14.5},
    },
    freeMode: true,
    loop: true,
    on: {
      reachEnd:()=>{
        if(!this.cargarMas)return;
        this.cargarData.emit();
      }
    }
    };
  constructor() { }

  ngAfterViewInit() {
    const sliderElem = this.swiperPoster.nativeElement;
    this.sliderOpts.loop = !this.cargarMas;
    Object.assign(sliderElem!, this.sliderOpts);
    sliderElem!.initialize();
  }

}
