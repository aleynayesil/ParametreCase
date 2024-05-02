import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  products:Product[]=[];

  product:any={};

  constructor(
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
  }

  saveProduct(product:Product){
    this.productService.createProduct({
      id:this.product.id,
      name:this.product.name,
      description:this.product.description,
      price:this.product.price,
      image:this.product.image,
      category:product.category,
      inventoryStatus:"Stokta",
      rating:1,
      quantity:product.quantity

      
    }).subscribe(task=>{
    console.log(task);
    this.router.navigateByUrl('/');
  });
  }
}
