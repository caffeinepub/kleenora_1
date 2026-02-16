import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    thumbnail: string;
    name: string;
    description: string;
    image: string;
    price: bigint;
}
export interface backendInterface {
    clearProducts(): Promise<void>;
    deleteProduct(productId: bigint): Promise<void>;
    getProductById(id: bigint): Promise<Product>;
    getProducts(): Promise<Array<Product>>;
    getProductsInRange(fromInclusive: bigint, toExclusive: bigint): Promise<Array<Product>>;
    initialize(): Promise<void>;
    updateProduct(product: Product): Promise<void>;
}
