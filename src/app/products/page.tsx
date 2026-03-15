import { Metadata } from 'next';
import ProductsComponent from './ProductsComponent';

export const metadata: Metadata = {
    title: 'المنتجات',
    description: 'تصفح منتجات مجموعة شماخ للتجارة: أرز القيصر وشماخ والبيت، تونة البيت، معلبات غذائية، سيارات شيري تيجو، سيارات وشاحنات JMC، إلكترونيات LG، أجهزة تيفال، وبطاريات الطاقة الشمسية.',
    openGraph: {
        title: 'منتجات مجموعة شماخ للتجارة',
        description: 'تصفح تشكيلتنا الواسعة من المنتجات الغذائية والسيارات والإلكترونيات وحلول الطاقة.',
        url: 'https://test.shammakh.com/products',
    },
};

export default function ProductsPage() {
    return (
        <ProductsComponent />
    );
}