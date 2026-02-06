import { Metadata } from 'next';
import AboutComponent from './AboutComponent';

export const metadata: Metadata = {
    title: 'عن المجموعة',
    description: 'عن المجموعة',
};

export default function About() {
    return (
        <AboutComponent />
    );
}
