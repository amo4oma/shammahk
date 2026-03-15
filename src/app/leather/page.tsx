import { Metadata } from 'next';
import LeatherContent from './LeatherContent';

export const metadata: Metadata = {
    title: 'شركة شماخ للدباغة والصناعات الجلدية',
    description: 'شركة شماخ للدباغة والصناعات الجلدية المحدودة - واحدة من الشركات الرائدة في مجال الصناعات الجلدية في اليمن. أحدث تقنيات الدباغة والتشطيب لإنتاج جلود عالية الجودة.',
    openGraph: {
        title: 'شركة شماخ للدباغة والصناعات الجلدية',
        description: 'شركة رائدة في مجال الصناعات الجلدية والدباغة في اليمن - جزء من مجموعة شماخ التجارية.',
        url: 'https://test.shammakh.com/leather',
    },
};

export default function LeatherPage() {
    return <LeatherContent />;
}