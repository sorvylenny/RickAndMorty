import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './body/characters/characters.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './body/header/header.component';
import { CharacterdetailComponent } from './body/characterdetail/Characterdetail';




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component:HomeComponent},
  {path: 'characters', component:CharactersComponent},
  {path: 'character/:id', component:CharacterdetailComponent},
  // {path: 'search', component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//se exportan los componentes en una variable como buena practica
export const routingComponent = [
  CharactersComponent,
  HomeComponent,
  HeaderComponent,
  CharacterdetailComponent
]
