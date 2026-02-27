'use client';
import { Home, Users, Briefcase, Heart, Activity, Car, GraduationCap, Smile, MessageSquare, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Card } from './ui/card';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  slug: string;
}

function ServiceCard({ icon: Icon, title, description, color, slug }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[320px] w-full [perspective:1000px] group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Face */}
        <Card className="absolute inset-0 h-full w-full [backface-visibility:hidden] border-0 bg-white shadow-lg group-hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
          <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${color} rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6a2875] transition-colors duration-300">
                {title}
              </h3>
              <div className="w-12 h-1 bg-[#6a2875]/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-[#6a2875] transition-all duration-500" />
            </div>
          </div>
          {/* Subtle decoration */}
          <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${color} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
        </Card>

        {/* Back Face */}
        <Card className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] border-0 bg-white shadow-2xl overflow-hidden">
          {/* Background Gradient Layer */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.03]`} />

          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
            <h3 className="font-extrabold text-[#6a2875] text-xl tracking-tight">
              {title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
              {description}
            </p>

            <div className="pt-4">
              <Link
                href={`/services/${slug}`}
                className="group/link relative inline-flex items-center gap-2 bg-[#6a2875] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#6a2875]/20 hover:shadow-[#6a2875]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </div>

          {/* Decorative Corner Icon */}
          <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${color} opacity-10 rounded-full blur-xl`} />
        </Card>
      </motion.div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Daily Living Support',
      description: 'Assistance with everyday activities including personal care, meal preparation, and household tasks.',
      color: 'from-blue-500 to-blue-600',
      slug: 'daily-living-support',
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Support to engage with your community, participate in social activities, and build meaningful connections.',
      color: 'from-indigo-500 to-indigo-600',
      slug: 'community-access',
    },
    // {
    //   icon: Briefcase,
    //   title: 'Employment Support',
    //   description: 'Assistance in finding and maintaining employment, including skill development and workplace support.',
    //   color: 'from-purple-500 to-purple-600',
    // },
    {
      icon: Heart,
      title: 'Respite Care',
      description: 'Short-term care services giving families and carers a break while ensuring quality support continues.',
      color: 'from-pink-500 to-pink-600',
      slug: 'respite-care',
    },
    // {
    //   icon: Activity,
    //   title: 'Therapy & Allied Health',
    //   description: 'Access to physiotherapy, occupational therapy, speech pathology, and other allied health services.',
    //   color: 'from-red-500 to-red-600',
    // },
    {
      icon: Car,
      title: 'Transport Assistance',
      description: 'Support with transportation to appointments, work, social events, and community activities.',
      color: 'from-orange-500 to-orange-600',
      slug: 'transport-assistance',
    },
    // {
    //   icon: GraduationCap,
    //   title: 'Skills Development',
    //   description: 'Programs to develop life skills, independence, and capabilities for greater autonomy.',
    //   color: 'from-yellow-500 to-yellow-600',
    // },
    {
      icon: Smile,
      title: 'Social & Recreation',
      description: 'Fun and engaging activities designed to promote wellbeing, friendship, and community participation.',
      color: 'from-green-500 to-green-600',
      slug: 'social-recreation',
    },
    {
      icon: MessageSquare,
      title: 'NDIS Plan advisory services',
      description: 'At My Plan Advisor, we believe that every NDIS participant deserves a partner they can trust.',
      color: 'from-purple-500 to-purple-600',
      slug: 'ndis-plan-advisory',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-[#6a2875]/10 text-[#6a2875] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4 shadow-sm border border-[#6a2875]/20">
            Our Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            What We're <span className="text-[#6a2875]">Offering</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed font-medium">
            Comprehensive disability support services designed to empower you to live independently
            and achieve your goals. Our person-centred approach ensures care that's tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 rounded-3xl bg-white shadow-xl shadow-blue-500/5 border border-blue-50"
        >
          <p className="text-gray-600 mb-6 font-medium text-lg">
            Don't see what you're looking for? We offer customised support plans.
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-[#6a2875] hover:bg-[#1e3a8a] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-[#6a2875]/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
