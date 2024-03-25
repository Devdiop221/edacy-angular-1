// interface for product

export interface Product {
    id: string;
    name: string;
    price?: string;
    description: string;
    image: string;
    quantity: string;
    category?: string;
    promo: boolean;
    promoVal?: number;
}