import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [CardService]
})
export class CardListComponent implements OnInit {

  user: any;
  cards: Card[]=[];

  constructor(
    private service:CardService) { }

  ngOnInit() {
    //this.getRandomCard();
   // this.getRandomId();

    // this.service.getUser().subscribe(
    //   (user: any) => {
    //     console.log(user)
    //     this.user = user.results[0];
    //     console.log(this.user)
    //   }
    // )
  }

  // getRandomId(){
  // for(let i=0; i<3; i++){
  // }
   //}
 

}
