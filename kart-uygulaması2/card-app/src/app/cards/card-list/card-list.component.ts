import { Component,OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  products: Product[]=[];

  product:Product;

  constructor(
    private productService:ProductService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
  }
  showWarn() {
    //Silindi uyarı mesaj içeriği
    this.messageService.add({ severity: 'warn', summary: 'Uyarı', detail: 'Seçtiğiniz ürün başarıyla silindi' ,life:2000});
  }
  deleteCard(product:Product){
    this.productService.deleteProduct(product.id).subscribe((res)=>{
      this.showWarn();
    });
    setTimeout(() => {
      window.location.reload();//Silindi uyarısı göründükten sonra sayfayı yeniden yükler.
    }, 2000);
  }
}
