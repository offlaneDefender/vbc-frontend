export interface BrandedProduct{
    _id: string;
    name: string;
    company: string;
    products: MedicinalProduct[];
}

export interface MedicinalProduct{
    _id: string;
    name: string;
    prices: ProductPrice[];
}

export interface ProductPrice{
    _id: string;
    price: number;
    packSize: PackSize;
}

export interface PackSize{
    _id: string;
    name: string;
    size: number;
}

export interface Discount{
    _id: string;
    value: number; // percentage discount as a number between 0 and 1 (0.1 = 10%)
}

export interface Patient{
    _id: string;
    name: string;
    age: number;
    stage: 1 | 2 | 3 | 4;
    pfs: number;
    os: number;
}

export interface Contract{
    _id: string;
    patient: Patient;
    product: MedicinalProduct;
    packSize: PackSize;
    discount: Discount;
    totalValue: number;
    startDate: string;
    notes: string;
}