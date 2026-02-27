"use client";

import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import bannerImg1 from '../../assets/bnnr1.jpg';
import bannerImg2 from '../../assets/istockphoto-1428287244-2048x2048.webp';
import bannerImg3 from '../../assets/community-participation.png';
import bannerImg4 from '../../assets/home-support.png';
import bannerImg5 from '../../assets/accessible-housing.png';
import bannerImg6 from '../../assets/istockphoto-858352780-2048x2048.webp';
import bannerImg7 from '../../assets/istockphoto-1384244735-2048x2048.webp';
import bannerImg8 from '../../assets/istockphoto-492892834-2048x2048.webp';
// import bannerImg1 from '../../assets/banner/mdc-bnr-1.png';
// import bannerImg2 from '../../assets/banner/mdc-bnr-2.png';
// import bannerImg3 from '../../assets/banner/mdc-bnr-3.png';
// import bannerImg4 from '../../assets/banner/mdc-bnr-4.png';
// import bannerImg5 from '../../assets/banner/mdc-bnr-5.png';
// import bannerImg6 from '../../assets/banner/mdc-bnr-3.png';
// import bannerImg7 from '../../assets/banner/mdc-bnr-4.png';
// import bannerImg8 from '../../assets/banner/mdc-bnr-5.png';


const slides = [
    {
        image: bannerImg1,
        badge: 'Welcome to My Disability Care',
        title: 'Empowering Lives Through Quality Care',
        description: 'We provide comprehensive disability care services tailored to your unique needs. Our dedicated team is committed to helping you live a fulfilling and independent life.',
        points: [
            'Personalised care plans designed for you',
            'Experienced and compassionate support workers',
            'NDIS registered provider'
        ]
    },
    {
        image: bannerImg2,
        badge: 'Your Care, Our Priority',
        title: 'Professional Support for Independent Living',
        description: 'Discover how our tailored support programs can make a difference in your daily life. We focus on your goals and aspirations to provide the best possible care.',
        points: [
            'Tailored support programs for all ages',
            'Focus on independence and well-being',
            '24/7 support availability'
        ]
    },
    {
        image: bannerImg6,
        badge: 'Community Participation',
        title: 'Real Care. Real Support. Right Here in Australia.',
        description: 'Engage in social, recreational, and community activities with our support. We help you build confidence, make friends, and participate in the activities you love.',
        points: [
            'Social and recreational activity support',
            'Skill building and community engagement',
            'Inclusive environment for all'
        ]
    },
    {
        image: bannerImg7,
        badge: 'Home & Living Support',
        title: 'Proudly Supporting Australians, Every Step of the Way.',
        description: 'Our dedicated team provides essential support with daily living tasks, personal care, and domestic assistance, ensuring you can live safely and comfortably at home.',
        points: [
            'Daily living and personal care assistance',
            'Domestic and meal preparation support',
            'Safe and comfortable home environment'
        ]
    },
    {
        image: bannerImg8,
        badge: 'Specialist Disability Accommodation',
        title: 'Quality Disability Support, the Aussie Way.',
        description: 'Discover high-quality, fully accessible accommodation designed to meet your specific needs. Experience independent living in a supportive and modern environment.',
        points: [
            'Fully accessible and modern living spaces',
            'SDA and SIL accommodation options',
            'Focus on independence and comfort'
        ]
    }
];

export function Banner1() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-beizer for smooth ease-out
            },
        },
    };

    return (
        <section id="home" className="relative w-full h-[600px] lg:h-[800px] overflow-hidden bg-gray-900">
            <div className="h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover opacity-60"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative h-full container mx-auto px-6 flex items-center">
                                <AnimatePresence mode="wait">
                                    {selectedIndex === index && (
                                        <motion.div
                                            key={index}
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="max-w-2xl text-white space-y-6"
                                        >
                                            {/* <motion.div variants={itemVariants} className="inline-block">
                                                <span className="bg-[#6a2875] text-white px-4 py-2 rounded-full text-sm font-medium">
                                                    {slide.badge}
                                                </span>
                                            </motion.div> */}

                                            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold leading-tight">
                                                {slide.title.split(' ').map((word, i) =>
                                                    word === 'Quality' || word === 'Care' || word === 'Professional' || word === 'Support' || word === 'Support' || word === 'Real' || word === 'Care.' || word === 'Real.' || word === 'Support.' || word === 'Proudly' || word === 'Supporting' ?
                                                        <span key={i} className="text-[#b46bc0]">{word} </span> :
                                                        word + ' '
                                                )}
                                            </motion.h1>

                                            <motion.p variants={itemVariants} className="text-xl text-gray-200 leading-relaxed">
                                                {slide.description}
                                            </motion.p>

                                            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                                                {slide.points.map((point, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <CheckCircle className="w-5 h-5 text-[#6a2875] flex-shrink-0" />
                                                        <span className="text-gray-100">{point}</span>
                                                    </div>
                                                ))}
                                            </motion.div>

                                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                                                <Link href="/contact" passHref>
                                                    <Button className="bg-[#6a2875] hover:bg-white hover:text-[#6a2875] text-white px-8 py-6 text-lg transition-all">
                                                        Get Started Today
                                                        <ArrowRight className="ml-2 w-5 h-5" />
                                                    </Button>
                                                </Link>
                                                <Link href="/about" passHref>
                                                    <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-[#6a2875] px-8 py-6 text-lg transition-all">
                                                        Learn More
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                <button
                    onClick={scrollPrev}
                    className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-[#6a2875] transition-all shadow-lg"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-[#6a2875] w-12' : 'bg-white/40 w-4 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={scrollNext}
                    className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-[#6a2875] transition-all shadow-lg"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
