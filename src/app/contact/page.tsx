import { Metadata } from "next";
import ContactUs from "./ContactComponent";

export const metadata: Metadata = {
    title: "تواصل معنا",
    description: "تواصل معنا",
};

export default function ContactPage() {
    return (
        <ContactUs />
    );
}