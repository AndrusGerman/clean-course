type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  /**
   * isProductReady
   */
  public isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (!this[key]) throw Error(`${key} is empty`);
          break;
        case "number":
          if (!this[key]) throw Error(`${key} is zero`);
          break;
        default:
           throw Error(`${typeof this[key]} is not supported`)
      }
    }
    return true;
  }

  toString() {
    // No Dry
    // if (!this.name) throw Error('name is empty');
    // if (!this.price) throw Error('price is zero');
    // if (!this.size) throw Error('size is empty');
    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", 10, "M");
  console.log(bluePants.toString());
})();
