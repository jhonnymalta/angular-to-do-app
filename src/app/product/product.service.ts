import test from 'node:test';
import {Subject} from 'rxjs'

export class ProductService{
    private products = ['night book'];

    productUpdated = new Subject()
    addProduct(productName:string){
        console.log(productName)
        this.products.push(productName);
        this.productUpdated.next(this.products);
    }

    getProducts(){
        return [...this.products]
    }
    deleteProduct(productName:string){
        this.products = this.products.filter(p => p !== productName)
        this.productUpdated.next(this.products)
    }
}