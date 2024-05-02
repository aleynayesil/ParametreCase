import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-a-card',
  templateUrl: './a-card.component.html',
  styleUrls: ['./a-card.component.css']
})
export class ACardComponent implements OnInit {

  @Input() cards: Card[];

  constructor(
    private service:CardService
  ) { }

  ngOnInit() {
    this.getRandomCard()
  } 

  getRandomCard(){
    this.service.getCards().subscribe((data:Card[])=>{
      this.cards= data;

      const val = Math.floor(Math.random() * this.cards.length) + 1;

      let randomData = data.filter(x => x.id === val);

      this.cards = randomData; 
    });
   }
}
