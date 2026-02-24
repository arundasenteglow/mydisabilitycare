import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { FloatingActions } from './components/FloatingActions';
import { Cta } from './components/Cta';

export const metadata = {
    title: 'Our Services - My Disability Care',
    description: 'Explore our range of professional disability support services including daily living support, community access, and respite care.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-10">
                <Services />
                <Cta />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
