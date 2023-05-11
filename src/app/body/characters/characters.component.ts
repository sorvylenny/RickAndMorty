import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {  Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { CharacterI } from '../../interface/characters.interface';
import { ApiService } from '../../service/api/api.service';






@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {






constructor(

  private api:ApiService,
  private router:Router,


  ) { }


  ngOnInit(): void {

    if(this.gender == '',this.status == ''){
      this.loadCharacters(this.page )}
      else {
        this.loadFilterCharacters(this.gender,this.status,this.page)
      }

      // this.loadCharacters (this.page )
      // this.loadFilterCharacters(this.gender,this.status,this.page)

    }

//variables e inicializaciones
    pageNumber: number = 1
    page : number = this.pageNumber
    pageSize: number = 20
    maxCharacters : number = 50
    statusSelected:string = ''
    status:string = this.statusSelected
    genderSelected:string  = ''
    gender:string = this.genderSelected

//seccion para html de la tabla de personajes
    characters: CharacterI[] = [];
    displayedColumns: string[] = [
        'position',
        'name',
        'species',
        'gender',
        'status',
        'id' ];




// grabar estado selecionado en la variable Status y llamar a la funcion para que ejecute el cambio
statusSearch( valueStatus:string ){
this.status = valueStatus
this.loadFilterCharacters(this.gender,this.status,this.page)
}

// grabar genero selecionado en la variable Genero y llamar a la funcion para que ejecute el cambio
genderSearch(valueGender:string){
  this.gender = valueGender
  this.loadFilterCharacters(this.gender,this.status,this.page)
}

//limpia el buscador
cleanSearch(){
  this.gender = '';
  this.status = '';
  this.loadFilterCharacters(this.gender,this.status,this.page);
}
//selector de Generos
  genders = [
    {valueGender: 'female', viewValue: 'Female'},
    {valueGender: 'male', viewValue: 'Male'},
    {valueGender: 'genderless', viewValue: 'Genderless'},
    {valueGender: 'unknown', viewValue: 'Unknown'},
    {valueGender: '',   viewValue:'None'},
    ];
//selector de Estado
  statusS = [
    {valueStatus: 'alive',viewValue: 'Alive'},
    {valueStatus: 'dead',viewValue: 'Dead'},
    {valueStatus: 'unknown', viewValue: 'Unknown' },
    {valueStatus: '',viewValue:'None'},
    ];

 gendersControl = new FormControl(this.genders[4].valueGender);
 statuSControl = new FormControl(this.statusS[3].valueStatus);
  form = new FormGroup({
  genderSelection: this.gendersControl,
  statusSelection: this.statuSControl,
  });

  //   form = new FormGroup({
  //   status: this.statuSControl,
  // });




//llamada al api para buscar todos los personajes
loadCharacters(page:number){
     this.api.getAllCharacters(page)
    .subscribe((data:any) => {
     this.characters = data.results;
     this.maxCharacters = data.info.count
     })


}

//manejo de paginador con el evento Next del paginador
handlePage (event:PageEvent){

   if(this.status == null){
    this.loadFilterCharacters(this.gender,this.status,event.pageIndex +1)
  }
   if(this.gender == null){
    this.loadFilterCharacters(this.gender,this.status,event.pageIndex +1)
  }
  if(this.gender == null,this.status == null){
     this.loadCharacters(event.pageIndex + 1 )}
   else {
     this.loadFilterCharacters(this.gender,this.status,event.pageIndex +1)
  }
// console.log(event)
}

//llamada al api para buscar los personajes por filtros
loadFilterCharacters(gender:string,status:string,page?:number){
    this.api.getAllFilterCharacters( gender,status,page)
    .subscribe((data:any) => {
     this.characters = data.results;
     this.maxCharacters = data.info.count;
     })
    }




//funcion que envia el id del personaje llama a componente de personajes detallados
characterDetails(id: number) {

this.router.navigate(['character',id])

  }

}
