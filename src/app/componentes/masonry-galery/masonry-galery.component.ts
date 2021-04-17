import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-masonry-galery',
  templateUrl: './masonry-galery.component.html',
  styleUrls: ['./masonry-galery.component.css']
})
export class MasonryGaleryComponent implements OnInit {

  imagesPortfolio  = [
    { image: '../../../assets/img/work/app-domino-julio-daza.png', titulo: 'App Escritorio', empresa: 'App Domino',
    url: 'https://github.com/Jucema89/appDomino'},
    { image: '../../../assets/img/work/catalogo-lissypet-julio-daza.jpg', titulo: 'Catálogo de Disfraces', empresa: 'Lissypet®',
    url: 'https://es.calameo.com/read/0061054271a7a755ebadf'},
    { image: '../../../assets/img/work/cameo-website-julio-daza.png', titulo: 'Desarrollo Web', empresa: 'Cameo Comunicaciones',
    url: 'https://cameocomunicaciones.com/'},
    { image: '../../../assets/img/work/full-domino-colombia-julio-daza.png', titulo: 'Desarrollo Web', empresa: 'Full Domino',
    url: 'https://fulldominocolombia.com/'},
    { image: '../../../assets/img/work/cmcs-cleaning-julio-daza.png', titulo: 'Desarrollo Web', empresa: 'CMCS Cleaning Ohio',
    url: 'https://cmcscleaning.com/'},
    { image: '../../../assets/img/work/esencias-up-julio-daza.png', titulo: 'Desarrollo Web', empresa: 'Esencias Up',
    url: 'https://jucema89.github.io/up-esencia/'},
    { image: '../../../assets/img/work/web-lissypet-julio-daza.png', titulo: 'Desarrollo Ecommerce', empresa: 'Lissypet®',
    url: 'https://lissypet.com/'},
    { image: '../../../assets/img/work/catalogo-navidad-lissypet-julio-daza.png', titulo: 'Catálogo de Navidad', empresa: 'Lissypet®',
    url: 'https://es.calameo.com/read/0061054276c607ca865c2'},
    { image: '../../../assets/img/work/MDMF-project-julio-daza.jpg', titulo: 'Desarrollo Gráfico', empresa: 'Mis Derechos mi Futuro',
    url: 'https://www.behance.net/gallery/77284121/Mis-Derechos-Mi-Futuro-Diseno-Grafico-Web'}
  ];
  constructor() {
  }

  ngOnInit() {

  }



}
