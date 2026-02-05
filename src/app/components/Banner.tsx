"use client";

import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

import bannerImg1 from '../../assets/istockphoto-603871162-2048x2048.jpg';
import bannerImg2 from '../../assets/istockphoto-2166780646-1024x1024.jpg';

const slides = [
  {
    image: bannerImg1,
    badge: 'Welcome to My Disability Care',
    title: 'Empowering Lives Through Quality Care',
    description: 'We provide comprehensive disability care services tailored to your unique needs. Our dedicated team is committed to helping you live a fulfilling and independent life.',
    points: [
      'Personalized care plans designed for you',
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
  }
];

export function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
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

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="inline-block">
                      <span className="bg-blue-100 text-[#6a2875] px-4 py-2 rounded-full text-sm font-medium">
                        {slide.badge}
                      </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title.split(' ').map((word, i) =>
                        word === 'Quality' || word === 'Care' || word === 'Professional' || word === 'Support' ?
                          <span key={i} className="text-[#6a2875]">{word} </span> :
                          word + ' '
                      )}
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="space-y-3">
                      {slide.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#6a2875] flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button className="bg-[#6a2875] hover:bg-[#1e3a8a] text-white px-8 py-6 text-lg">
                        Get Started Today
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button variant="outline" className="border-[#6a2875] text-[#6a2875] hover:bg-blue-50 px-8 py-6 text-lg">
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/2]">
                      <ImageWithFallback
                        src={slide.image}
                        alt={slide.title}
                        width={1080}
                        height={720}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#6a2875] rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">10+</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Years of Experience</p>
                          <p className="text-sm text-gray-600">Trusted Care Provider</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-white/80 border border-gray-200 text-gray-700 hover:bg-[#6a2875] hover:text-white transition-all shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${selectedIndex === index ? 'bg-[#6a2875] w-8' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-white/80 border border-gray-200 text-gray-700 hover:bg-[#6a2875] hover:text-white transition-all shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-[#6a2875] rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
