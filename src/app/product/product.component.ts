import { Component,OnInit ,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy{
  productName = '';
  products: Array<string> = [];
 
  private productSubscription: Subscription | any;
  isDisabled = true;


  constructor(private productService: ProductService){
   
  }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log("estou no onInit")
    this.productSubscription = this.productService.productUpdated.subscribe(()=>
    this.products = this.productService.getProducts())
  }
  onAddBook(form:any){   
    console.log("estou aqui");
    this.productService.addProduct(form.value.productName)
   
  } 
  

  onRemoveBook(product: string){
    
    this.products = this.products.filter(p => p !== product);
    
    
  }
  ngOnDestroy(): void {
    
      this.productSubscription.unsubscribe();
  }
}
