import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Process } from '../components/Process';
import { Cta } from '../components/Cta';
import { FloatingActions } from '../components/FloatingActions';
import { PageHeader } from '../components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Process - My Disability Care',
    description: 'Discover our simple 4-step process to getting started with My Disability Care and receiving the quality support you deserve.',
};

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <PageHeader
                    title="Our Process"
                    subtitle="Your journey to better care is simple and transparent. Follow our proven roadmap to personalized support."
                />
                <Process />
                <Cta />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
