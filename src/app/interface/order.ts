import { CartItem } from "./cart";

interface Checkout {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    paymentMethod: "Credit Card" | "Direct Payment";
    cardNumber?: string;
    cardHolderName?: string;
    expirationDate?: string;
    cvv?: string;
    note?: string;
    product: CartItem[]
}