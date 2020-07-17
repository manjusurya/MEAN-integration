import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent} from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { ActivatedRoute, Params } from '@angular/router';



const routes: Routes = [{path:'',component:ProductListComponent},
{path:'add',component:NewProductComponent},
{path:'edit/:id',component:EditProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
