export interface CartItem {
    id: number | string;
    image: string,
    authors: string,
    nameProduct: string;
    price: number;
    quantity: number;
}

export interface ShoppingCart {
    id?: number | string;
    userId: number | string;
    items: CartItem[];
    totalPrice: number;
}
