export interface Product {
  id: number;
  productName: string;
  brand: string;
  quantity: number;
  status: string;
  price: number;
  discountedPrice: number;
  productUnit: string;
}

export enum ProductStatus {
  MISSING = "Missing",
  MISSING_URGENT = "Missing - Urgent",
  APPROVED = "Approved",
}
