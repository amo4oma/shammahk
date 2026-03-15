import { Metadata } from 'next';
import AboutComponent from './AboutComponent';

export const metadata: Metadata = {
    title: 'عن المجموعة',
    description: 'تعرف على مجموعة شماخ للتجارة، تاريخها العريق منذ منتصف القرن العشرين، ورؤيتها في تعزيز الاقتصاد اليمني عبر قطاعات السيارات والإلكترونيات والمواد الغذائية والصناعات الجلدية وصوامع الغلال.',
    openGraph: {
        title: 'عن مجموعة شماخ للتجارة',
        description: 'تعرف على تاريخ ورؤية مجموعة شماخ للتجارة الرائدة في اليمن.',
        url: 'https://test.shammakh.com/about',
    },
};

export default function About() {
    return (
        <AboutComponent />
    );
}
