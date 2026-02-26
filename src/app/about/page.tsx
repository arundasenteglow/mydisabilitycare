import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Cta } from '../components/Cta';
import { FloatingActions } from '../components/FloatingActions';
import { PageHeader } from '../components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - My Disability Care',
    description: 'Learn more about My Disability Care, our mission, values, and our dedicated team providing compassionate NDIS support.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <PageHeader
                    title="About Us"
                    subtitle="Empowering individuals through compassionate and professional disability support services tailored to your unique journey."
                />
                <About />
                <Cta />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
