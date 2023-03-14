type Size = ''|'S'|'M'|'L'|'XL';

class Product {
    constructor(
        public name:string = '',
        public price:number = 0,
        public size:Size = '',
    ) {
        
    }

    toString() {
        // No Dry
        if (!this.name) throw Error('name is empty');
        if (!this.price) throw Error('price is zero');
        if (!this.size) throw Error('size is empty');

        
        return `${this.name} (${this.price}), ${this.size}`
    }
}


(()=>{
    const bluePants = new Product('Blue Large Pants',10,'M');
    console.log(bluePants.toString());
    
})()