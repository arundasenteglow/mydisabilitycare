import { Header } from './components/Header';
import { Banner1 } from './components/Banner1';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Banner1 />
                <About />
                <Services />
                <Process />
                <Team />
                <Contact />
                <Cta />
            </main>
            <Footer />
            <FloatingActions />
        </div>
    );
}
