import { faker } from "@faker-js/faker";
import { Product } from "../interface/product";

export function createProduct(): Product {
    const hasPromo = faker.datatype.boolean();
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    quantity: faker.commerce.price(),
    category: faker.commerce.department(),
    promo: hasPromo,
    promoVal: hasPromo ? faker.datatype.number({ min: 10, max:60}) : undefined,
  };
}

export function createProducts(counters: number = 10): Product[] {
    return faker.helpers.multiple(createProduct, {
        count: counters
    })
}