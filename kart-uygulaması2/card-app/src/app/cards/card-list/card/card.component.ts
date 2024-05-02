import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product:Product;//Parent component içerisindeki productlara ulaşabilmek için


  //card içerisinde bulunan sil butonu için parent component erişebilsin diye oluşturulmuş eventemitter.
  @Output() deleteEvent= new EventEmitter<Product>();


  products:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
    
  }

  deleteCard(product:Product){
    this.deleteEvent.emit(product);
  }

}
