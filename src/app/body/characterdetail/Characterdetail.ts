import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../service/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.css']
})
export class CharacterdetailComponent implements OnInit {

character: any

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

  })}

allCharacters() {
this.router.navigate(['characters'])

  }
  }
