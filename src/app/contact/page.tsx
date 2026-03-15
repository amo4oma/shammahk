import { Metadata } from "next";
import ContactUs from "./ContactComponent";

export const metadata: Metadata = {
    title: 'تواصل معنا',
    description: 'تواصل مع مجموعة شماخ للتجارة - استفسارات المبيعات والخدمات، عناوين الفروع في صنعاء وعدن، أرقام الهاتف والبريد الإلكتروني. نحن هنا لخدمتكم.',
    openGraph: {
        title: 'تواصل معنا - مجموعة شماخ للتجارة',
        description: 'تواصل مع مجموعة شماخ للتجارة للاستفسارات والخدمات.',
        url: 'https://test.shammakh.com/contact',
    },
};

export default function ContactPage() {
    return (
        <ContactUs />
    );
}