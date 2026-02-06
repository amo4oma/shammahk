import { Metadata } from 'next';
import AgenciesComponent from './AgenciesComponent';

export const metadata: Metadata = {
    title: "الوكالات",
    description: "الوكالات",
};

export default function AgenciesPage() {
    return (
        <AgenciesComponent />
    );
}
