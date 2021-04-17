// LLAMA LA RUTA PARA EL ROUTEO
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// TERMINA EL LLAMADO
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeBannerComponent } from './componentes/home-banner/home-banner.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { TwoproyectsComponent } from './componentes/twoproyects/twoproyects.component';
import { SkillsAllsComponent } from './componentes/skills-alls/skills-alls.component';
import { BtnMenuComponent } from './componentes/btn-menu/btn-menu.component';
import { MasonryGaleryComponent } from './componentes/masonry-galery/masonry-galery.component';
import { NgwWowModule } from 'ngx-wow';



// PROCESO DE CONSTANTES PARA EL ROUTEO//
const routes: Routes = [
  { path: '', component: HomeBannerComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'habilidades', component: SkillsAllsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''},


];

// FIN PROCESO DE CONSTANTES PARA EL ROUTEO//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    ContactoComponent,
    SobremiComponent,
    PortafolioComponent,
    ServiciosComponent,
    CarrouselComponent,
    ExperienciaComponent,
    SkillsComponent,
    TwoproyectsComponent,
    SkillsAllsComponent,
    BtnMenuComponent,
    MasonryGaleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgwWowModule,
    NgxMasonryModule,
    // Importa el Modulo de Ruteo
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'}),
    // Fin de Importe de Modulo
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
