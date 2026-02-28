import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';
import { FloatingActions } from '../components/FloatingActions';
import { Cta } from '../components/Cta';

import { PageHeader } from '../components/PageHeader';

export const metadata = {
    title: 'Our Services - My Disability Care',
    description: 'Explore our range of professional disability support services including daily living support, community access, and respite care.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <PageHeader
                    title="Our Services"
                    subtitle="Comprehensive disability support services designed to empower you to live independently and achieve your life goals."
                    bgClassName="bg-[#6a2875]"
                />
                <Services />
                <Cta />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
