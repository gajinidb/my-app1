import { HttpClient, HttpHandler } from '@angular/common/http';
import { HtmlParser, HtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductComponent } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

   getproduct():Observable<any>{

    return this._httpClient.get("https://fakestoreapi.com/products")
   
   }
  
}
