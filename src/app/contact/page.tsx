import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { FloatingActions } from '../components/FloatingActions';
import { PageHeader } from '../components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - My Disability Care',
    description: 'Get in touch with My Disability Care. We are here to answer your questions and help you with your NDIS plan.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <PageHeader
                    title="Contact Us"
                    subtitle="Have questions? Our friendly team is ready to listen and provide the guidance you need."
                />
                <Contact />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
