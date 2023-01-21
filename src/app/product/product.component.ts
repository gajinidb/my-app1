import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public products:any = [];
  
  constructor(private _productservice:ProductService){ 
   this._productservice.getproduct().subscribe(
    (data:any)=>{
      this.products=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
   )
  }

}
