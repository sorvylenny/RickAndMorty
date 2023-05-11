import { Injectable, Input,  } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { CharacterI} from '../../interface/characters.interface';
import { SingleCharacter } from 'src/app/interface/single-character.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
urlService:string = 'https://rickandmortyapi.com/api/';

constructor(
    private http:HttpClient,

  ) { }
  getAllCharacters ( page:number ):Observable<CharacterI[]>{
    let dir = this.urlService + "character/?page=" + page
    return this.http.get<CharacterI[]>(dir)
}
  getAllFilterCharacters ( gender:string, status:string, page?:number):Observable<CharacterI[]>{
    let dir = this.urlService + "character/?gender="+ gender + "&status=" + status + "&page=" + page
    return this.http.get<CharacterI[]>(dir)
}

    getCharacterByID ( id:number ):Observable<SingleCharacter[]>{
    let dir = this.urlService + "character/" + id
    return this.http.get<SingleCharacter[]>(dir)
}



}




