export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

// export type Category = {
//   title: string;
//   items: CategoryItem[];
// };

// export type CategoryMap = {
//   [key: string]: CategoryItem[];
// };

export type newCategoryItem = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: { rate: number; count: number };
};

// category: "men's clothing"
// description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id:1
// image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price:109.95
// rating:{rate: 3.9, count: 120}
// title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
