type Product = {
  id: number;
  name: string;
  price: number;
  quantity?: number; // default: 1
};

class Cart {
  private items: Product[] = [];

  add(product: Product): this {
    const existing = this.items.find(p => p.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + (product.quantity || 1);
    } else {
      this.items.push({ ...product, quantity: product.quantity || 1 });
    }
    return this;
  }

  remove(productId: number): this {
    this.items = this.items.filter(p => p.id !== productId);
    return this;
  }

  clear(): this {
    this.items = [];
    return this;
  }

  getTotal(): number {
    return this.items.reduce((total, p) => total + p.price * (p.quantity || 1), 0);
  }

  list(): Product[] {
    return this.items;
  }
}
