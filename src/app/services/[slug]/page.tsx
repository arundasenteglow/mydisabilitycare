import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FloatingActions } from '../../components/FloatingActions';
import { Contact } from '../../components/Contact';
import { Cta } from '../../components/Cta';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

// Assets
import dailyLivingImg from '../../../assets/home-support.png';
import communityAccessImg from '../../../assets/community-participation.png';
import respiteCareImg from '../../../assets/accessible-housing.png';
import transportImg from '../../../assets/istockphoto-1428287244-2048x2048.webp';
import socialRecreationImg from '../../../assets/istockphoto-858352780-2048x2048.webp';
import ndisPlanImg from '../../../assets/istockphoto-1185609641-2048x2048.webp';

const SERVICES_DATA: Record<string, any> = {
    'daily-living-support': {
        title: 'Daily Living Support',
        subtitle: 'Assistance with Your Day-to-Day Activities',
        description: 'Providing compassionate and professional assistance with daily living tasks to help you maintain independence in your own home.',
        image: dailyLivingImg,
        color: 'from-blue-500 to-blue-600',
        content: [
            'Our Daily Living Support services are designed to help you maintain your independence and quality of life in your own home. We provide personalised assistance tailored to your unique needs and preferences.',
            'Whether you need help with personal care, preparing healthy meals, or keeping your home tidy, our dedicated team is here to support you every step of the way.',
            'We believe in a person-centred approach, meaning you choose how and when you receive support. Our goal is to empower you to live the life you want, with the confidence that help is always at hand.'
        ],
        features: [
            'Personal care and hygiene assistance',
            'Meal planning and preparation',
            'Household chores and domestic assistance',
            'Shopping and errands support',
            'Medication management support',
            'Development of daily living skills',
            'Assistance with clinical needs'
        ],
        benefits: [
            'Maintain independence in your own home',
            'Personalised care tailored to your goals',
            'Reliable and consistent support',
            'Peace of mind for you and your family'
        ]
    },
    'community-access': {
        title: 'Community Access',
        subtitle: 'Connecting You with Your Community',
        description: 'Support to engage with your community, participate in social activities, and build meaningful connections with others.',
        image: communityAccessImg,
        color: 'from-indigo-500 to-indigo-600',
        content: [
            'Engaging with the community is vital for wellbeing and personal growth. Our Community Access services are designed to help you participate in the activities you enjoy and build lasting social connections.',
            'We support you in exploring your interests, whether it\'s joining a local sports club, attending community events, or simply enjoying a coffee at your local cafe.',
            'Our support workers act as companions and facilitators, helping you build confidence in social situations and ensuring you can access all the resources your community has to offer.'
        ],
        features: [
            'Accompanying you to social events and outings',
            'Support with library visits and shopping',
            'Assistance joining clubs and interest groups',
            'Building confidence in social environments',
            'Accessing community resources and programs',
            'Support for educational and vocational pursuits',
            'Developing social and communication skills'
        ],
        benefits: [
            'Reduced feelings of social isolation',
            'Increased confidence and independence',
            'Opportunities to make new friends',
            'Greater participation in the community'
        ]
    },
    'respite-care': {
        title: 'Respite Care',
        subtitle: 'Quality Care When You Need a Break',
        description: 'Short-term care services giving families and carers a necessary break while ensuring high-quality support continues for the participant.',
        image: respiteCareImg,
        color: 'from-pink-500 to-pink-600',
        content: [
            'Our Respite Care services provide a vital support system for both participants and their primary carers. We offer a safe, supportive, and engaging environment where participants can enjoy new experiences while their carers take a well-deserved break.',
            'Whether it\'s for a few hours, a day, or longer, we provide flexible respite options that cater to your specific needs and preferences.',
            'During respite, participants can engage in various activities, build social skills, and enjoy a change of scenery, all while receiving the same high standard of care they are accustomed to.'
        ],
        features: [
            'Short-term accommodation (STA)',
            'In-home respite support',
            'Community-based respite activities',
            'Flexible scheduling (day, night, or weekend)',
            'Personalised care plans during respite',
            'Support with all daily living activities',
            'Safe and modern respite facilities'
        ],
        benefits: [
            'Prevents carer burnout and stress',
            'Provides new experiences for participants',
            'Flexible options to suit family needs',
            'Maintains routine and stability for participants'
        ]
    },
    'transport-assistance': {
        title: 'Transport Assistance',
        subtitle: 'Reliable Travel for Your Daily Needs',
        description: 'Safe and reliable transportation support to help you get to appointments, work, social events, and community activities.',
        image: transportImg,
        color: 'from-orange-500 to-orange-600',
        content: [
            'Getting where you need to go should never be a barrier to living a full and active life. Our Transport Assistance services provide safe and reliable ways for you to travel to your various commitments.',
            'We understand that navigating public transport or driving can sometimes be challenging. Our dedicated team is here to ensure you get to your destination safely and on time.',
            'From medical appointments to social gatherings, we provide the transport support you need to maintain your independence and stay connected with your community.'
        ],
        features: [
            'Travel to medical and therapy appointments',
            'Transportation to work or educational settings',
            'Getting to social gatherings and events',
            'Assistance using public transportation',
            'Safe and well-maintained vehicles',
            'Door-to-door support services',
            'Tailored travel plans based on your needs'
        ],
        benefits: [
            'Safe and reliable travel solutions',
            'Increased mobility and independence',
            'Reduced stress and anxiety around travel',
            'Consistent attendance at important appointments'
        ]
    },
    'social-recreation': {
        title: 'Social & Recreation',
        subtitle: 'Fun Activities for a Fulfilling Life',
        description: 'Engaging social and recreational activities designed to promote wellbeing, friendship, and active community participation.',
        image: socialRecreationImg,
        color: 'from-green-500 to-green-600',
        content: [
            'At My Disability Care, we believe that fun and recreation are essential components of a healthy and happy life. Our Social & Recreation programs are designed to be inclusive, engaging, and specifically tailored to your interests.',
            'Our programs offer a wide range of activities that promote physical health, mental wellbeing, and social connection. We help you discover new hobbies, develop skills, and make meaningful friendships.',
            'Whether you enjoy being active outdoors, getting creative with crafts, or simply socialising with friends, we have something for everyone. Our goal is to ensure you lead a vibrant and socially active life.'
        ],
        features: [
            'Group outings to cinemas, parks, and museums',
            'Creative workshops (arts, crafts, music)',
            'Sports and physical health activities',
            'Holiday programs and special events',
            'Skill development through recreational play',
            'Social clubs and interest-based groups',
            'In-home social support activities'
        ],
        benefits: [
            'Improved mental and physical health',
            'Enhanced social and communication skills',
            'Opportunities to discover new talents',
            'Stronger social networks and friendships'
        ]
    },
    'ndis-plan-advisory': {
        title: 'NDIS Plan Advisory Services',
        subtitle: 'Our experience, mission and Vaules.',
        description: 'Professional support to help you understand, navigate, and maximise your NDIS plan to achieve your life goals.',
        image: ndisPlanImg,
        color: 'from-purple-500 to-purple-600',
        content: [
            'At My Plan Advisor, we believe that every NDIS participant deserves a partner they can trust. We’re not just administrators. We’re people who genuinely care about helping you get the most out of your plan, with honesty, transparency, and warmth.',
            'Our Mission: To simplify NDIS plan management through financial expertise, technology, and genuine care – empowering participants to focus on living their best lives.',
            'A future where every NDIS participant can access seamless support and clear guidance, ensuring their plan works for them — not the other way around.'
        ],
        features: [
            'In-depth plan orientation and explanation',
            'Budget management and tracking advice',
            'Connecting with service providers',
            'Support for plan reviews and renewals',
            'Identifying community and mainstream supports',
            'Guidance on self-management and plan management',
            'Goal setting and achievement strategies'
        ],
        benefits: [
            'Maximum value from your NDIS funding',
            'Clear understanding of your NDIS plan',
            'Stress-free navigation of NDIS processes',
            'Faster access to required supports'
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(SERVICES_DATA).map((slug) => ({
        slug: slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = SERVICES_DATA[params.slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                {/* Service Hero */}
                <section className={`relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br ${service.color}`}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Services
                            </Link>

                            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-white/90 font-medium leading-relaxed">
                                {service.subtitle}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#6a2875] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/services" className="hover:text-[#6a2875] transition-colors">Services</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#6a2875] font-semibold">{service.title}</span>
                    </div>
                </div>

                {/* Content Section */}
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Image & Feature List */}
                            <div className="space-y-12">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover"
                                        placeholder="blur"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent`} />
                                </div>

                                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${service.color}`} />
                                        What This Includes
                                    </h3>
                                    <div className="grid sm:grid-cols-1 gap-4">
                                        {service.features.map((feature: string, idx: number) => (
                                            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                                <CheckCircle2 className="w-5 h-5 text-[#6a2875] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Text Content & Benefits */}
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                                        <span className="text-[#6a2875]">{service.title}</span>
                                    </h2>
                                    <div className="space-y-4">
                                        {service.content.map((paragraph: string, idx: number) => (
                                            <p key={idx} className="text-lg text-gray-600 leading-relaxed font-medium">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className={`rounded-3xl p-8 lg:p-10 bg-gradient-to-br ${service.color} text-white shadow-2xl`}>
                                    <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {service.benefits.map((benefit: string, idx: number) => (
                                            <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                                <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                                                <span className="font-semibold text-white/95">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Contact Card */}
                                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Need This Service?</h4>
                                        <p className="text-gray-600">Our team is ready to help you get started.</p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="bg-[#6a2875] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1e3a8a] transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap"
                                    >
                                        Contact Us Today
                                        <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
                <Cta />
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
}
