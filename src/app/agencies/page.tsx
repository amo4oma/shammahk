import { Metadata } from 'next';
import AgenciesComponent from './AgenciesComponent';

export const metadata: Metadata = {
    title: 'الوكالات',
    description: 'الوكالات الحصرية لمجموعة شماخ للتجارة في اليمن: سيارات شيري، سيارات وشاحنات JMC، إلكترونيات LG، أجهزة تيفال، ويستبوينت، أريستون، وكلاس. أفضل العلامات التجارية العالمية بضمان محلي.',
    openGraph: {
        title: 'الوكالات الحصرية - مجموعة شماخ للتجارة',
        description: 'الوكالات الحصرية لمجموعة شماخ: شيري، JMC، LG، تيفال وغيرها من العلامات التجارية العالمية.',
        url: 'https://test.shammakh.com/agencies',
    },
};

export default function AgenciesPage() {
    return (
        <AgenciesComponent />
    );
}
