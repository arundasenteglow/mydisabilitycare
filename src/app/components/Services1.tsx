import { Home, Users, Briefcase, Heart, Activity, Car, GraduationCap, Smile } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Services1() {
  const services = [
    {
      icon: Home,
      title: 'Daily Living Support',
      description: 'Assistance with everyday activities including personal care, meal preparation, and household tasks.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Support to engage with your community, participate in social activities, and build meaningful connections.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Briefcase,
      title: 'Employment Support',
      description: 'Assistance in finding and maintaining employment, including skill development and workplace support.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Heart,
      title: 'Respite Care',
      description: 'Short-term care services giving families and carers a break while ensuring quality support continues.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Activity,
      title: 'Therapy & Allied Health',
      description: 'Access to physiotherapy, occupational therapy, speech pathology, and other allied health services.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Car,
      title: 'Transport Assistance',
      description: 'Support with transportation to appointments, work, social events, and community activities.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: GraduationCap,
      title: 'Skills Development',
      description: 'Programs to develop life skills, independence, and capabilities for greater autonomy.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Smile,
      title: 'Social & Recreation',
      description: 'Fun and engaging activities designed to promote wellbeing, friendship, and community participation.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#6a2875] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            What We're Offering
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Comprehensive disability support services designed to empower you to live independently
            and achieve your goals. Our person-centred approach ensures care that's tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-6 space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#6a2875] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2">
                  <a
                    href="#"
                    className="text-[#6a2875] text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <span>→</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? We offer customised support plans.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#6a2875] hover:bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
