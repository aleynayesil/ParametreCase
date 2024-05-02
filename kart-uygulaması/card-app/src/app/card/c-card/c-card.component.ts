import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-c-card',
  templateUrl: './c-card.component.html',
  styleUrls: ['./c-card.component.css'],
  providers: [CardService]
})
export class CCardComponent implements OnInit {
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
