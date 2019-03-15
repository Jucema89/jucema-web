
// LLAMA LA RUTA PARA EL ROUTEO
import { RouterModule, Routes } from '@angular/router';
// TERMINA EL LLAMADO
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeBannerComponent } from './componentes/home-banner/home-banner.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';


// PROCESO DE CONSTANTES PARA EL ROUTEO//
const routes: Routes = [
  { path: '', component: HomeBannerComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'portafolio', component: PortafolioComponent },
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
  ],
  imports: [
    BrowserModule,
    // Importa el Modulo de Ruteo
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})
    // Fin de Importe de Modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
