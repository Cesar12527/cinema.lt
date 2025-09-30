import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, viewChild, ViewChild } from '@angular/core';
import { IMovies } from 'src/app/models/movies.models';
import { ImagenPipe } from 'src/app/pipes/imagen-pipe';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-slider-pelis-backdrop',
  templateUrl: './slider-pelis-backdrop.component.html',
  styleUrls: ['./slider-pelis-backdrop.component.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImagenPipe]
})
export class SliderPelisBackdropComponent  implements AfterViewInit {
  @Input() peliculas : IMovies[] = [];
  @ViewChild('SwiperBackdrop', {static:false}) swiperContrainer!: ElementRef;
  private sliderOpts: SwiperOptions = {
    slidesPerView: 1.1,
    breakpoints: {
      520: {slidesPerView: 2.1},
      1024: { slidesPerView: 3.2},
      1300: { slidesPerView: 4.2},
    },
    freeMode: true,
    loop: true,
    };
  constructor() { }

  ngAfterViewInit() {
    const sliderElem = this.swiperContrainer.nativeElement;
    Object.assign(sliderElem!, this.sliderOpts);
    sliderElem!.initialize();
  }

}
