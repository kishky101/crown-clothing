import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
    IS_CART_OPEN = 'cart/IS_CART_OPEN',
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}

export type CartItemType = CategoryItem & {
    quantity: number;
} 