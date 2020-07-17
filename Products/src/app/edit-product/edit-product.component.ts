import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-list/product.model';
import { Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit,OnDestroy {
  title:String="Edit Product";

  constructor(private productService:ProductService,private router: Router,
    private activatedRoute:ActivatedRoute) { }
  productItem=new ProductModel(null,null,null,null,null,null,null,null);
  sub;

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params: Params): void => {
      const id = params['id'];
      this.productService.getProduct(id).subscribe((product)=>
      {
        let data=JSON.parse(JSON.stringify(product))
        this.productItem=data[0]
        console.log(this.productItem)
      })
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
}

  EditProduct(){
    console.log();
    this.productService.EditProduct(this.productItem);
    this.router.navigate(['/']);
  }

}
