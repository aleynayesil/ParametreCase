import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-b-card',
  templateUrl: './b-card.component.html',
  styleUrls: ['./b-card.component.css'],
  providers: [CardService]
})
export class BCardComponent implements OnInit {
  @Input() cards: Card[];

  constructor(
    private service:CardService
  ) { }

  ngOnInit() {
    this.getRandomCard();
  }
  getRandomCard(){
    this.service.getCards().subscribe((data:Card[])=>{
      this.cards= data;
      const val = Math.floor(Math.random() * this.cards.length) + 1;

      const randomData = data.filter(x => x.id === val);

      this.cards = randomData; 
    });
   }
}
