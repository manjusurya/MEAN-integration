import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})

  }
  deleteProduct(id){
  return this.http.post("http://localhost:3000/deleteProduct",{"id":id})
  .subscribe((status)=>{console.log(status);
  });
  }
  EditProduct(item){
    return this.http.post("http://localhost:3000/EditProduct",{"item":item})
    .subscribe((status)=>{console.log(status);
    });
  }
  getProduct(id){
    return this.http.post("http://localhost:3000/product",{"id":id});
}
}
