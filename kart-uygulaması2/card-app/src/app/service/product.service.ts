import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private url = " http://localhost:3000/data";

  constructor(private http: HttpClient) { }


  getProducts():Observable<Product[]> {
      return this.http.get<Product[]>(this.url);
  }
  deleteProduct(id:any){
    return this.http.delete(this.url +"/"+ id);
  }
  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url,product);
}
}
