import { Metadata } from 'next';
import GrainContent from './GrainContent';

export const metadata: Metadata = {
    title: 'الشركة العربية لصوامع الغلال',
    description: 'الشركة العربية لصوامع الغلال ومطاحن الدقيق المحدودة - إحدى شركات مجموعة شماخ الرائدة في تخزين الحبوب وتصنيع الدقيق في اليمن. صوامع حديثة، خطوط إنتاج متطورة، ومنتجات بجودة عالمية.',
    openGraph: {
        title: 'الشركة العربية لصوامع الغلال - مجموعة شماخ',
        description: 'صوامع الغلال ومطاحن الدقيق - تخزين الحبوب وتصنيع الدقيق بأعلى المعايير في اليمن.',
        url: 'https://test.shammakh.com/grain',
    },
};

export default function GrainPage() {
    return <GrainContent />;
}