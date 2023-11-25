import { Component , OnInit,Input, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() bookName: string = '';
  @Output() bookClicked = new EventEmitter();

  constructor(private productService: ProductService){}

 ngOnInit(): void {
   
 }

 onClicked(){
  this.productService.deleteProduct(this.bookName)
 }
 
}
