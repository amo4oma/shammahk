import { Metadata } from 'next';
import ProductsComponent from './ProductsComponent';

export const metadata: Metadata = {
    title: "المنتجات",
    description: "المنتجات",
};

export default function ProductsPage() {
    return (
        <ProductsComponent />
    );
}