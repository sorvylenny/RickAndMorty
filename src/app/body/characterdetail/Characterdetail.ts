import { Component,  EventEmitter,  Input,  OnInit, Output} from '@angular/core';
import { ApiService } from '../../service/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleCharacter } from 'src/app/interface/single-character.interface';



@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.css']
})
export class CharacterdetailComponent implements OnInit {

character: any
// @Output() characterDetails = new EventEmitter<void>();


constructor(
   private api:ApiService,
   private router:Router,
   private activerouter:ActivatedRoute,

  ) { }

  ngOnInit(): void {

    let characterId : any = this.activerouter.snapshot.paramMap.get('id')
    this.getSingleCharacter (characterId)

  }

  getSingleCharacter(id:number){
   this.api.getCharacterByID(id)
   .subscribe((data:any) => {
   this.character = data;
   console.log(this.character)

  })}

allCharacters() {
this.router.navigate(['characters'])

  }
  }
