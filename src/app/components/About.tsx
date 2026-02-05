import { Heart, Users, Award, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Our team provides caring, respectful support tailored to individual needs and preferences.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Highly trained professionals dedicated to delivering exceptional disability support services.',
    },
    {
      icon: Award,
      title: 'NDIS Registered',
      description: 'Fully registered and compliant NDIS provider committed to quality and safety standards.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance available to ensure your needs are met anytime, anywhere.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1606618742136-4424143d71fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaGVscGluZ3xlbnwxfHx8fDE3NjYyMTU1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Healthcare professional"
                    width={500}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1617080090911-91409e3496ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjYXJlJTIwc3VwcG9ydHxlbnwxfHx8fDE3NjYyMTU1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Community care"
                    width={500}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY2MjE1NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Healthcare team"
                    width={500}
                    height={320}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#6a2875] text-white px-8 py-4 rounded-full shadow-xl hidden lg:block">
              <p className="text-center font-bold">Trusted by 1000+ Families</p>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-6">
            <div>
              <span className="text-[#6a2875] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              My Disability Care is a leading provider of disability support services committed to
              empowering individuals to live their best lives. We believe in person-centered care
              that respects individual choices, promotes independence, and builds strong communities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team of dedicated professionals works closely with participants, families, and
              support networks to deliver high-quality, tailored services that meet unique needs
              and goals. Whether you need assistance with daily living, community access, or
              specialized support, we're here to help every step of the way.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#6a2875]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
