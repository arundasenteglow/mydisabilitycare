import { Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import teamImg1 from '../../assets/vishnu.png';
import teamImg2 from '../../assets/indergill.jpeg';
import teamImg3 from '../../assets/Tharindu.jpg';

export function Team() {
  const teamMembers = [
    {
      name: 'Vishnu Menon',
      role: 'Director - CEO',
      image: teamImg1,
      bio: 'With more than 20 years of combined experience in corporate banking and disability services.Vishnu brings deep expertise in financial management, budgeting, and compliance.',
      email: 'vishnu@mydisabilitycare.org',
      phone: '0431 687 423',
    },
    {
      name: 'Inder Gill',
      role: 'Director - COO',
      image: teamImg2,
      bio: 'Inder Gill is a lawyer and business professional with a strong background in law, disability services, and accounting.',
      email: 'inder@mydisabilitycare.org',
      phone: '0431 687 424',
    },
    {
      name: '',
      role: '',
      image: '',
      bio: '',
      email: '',
      phone: '',
    },
    // {
    //   name: 'Tharindu Karunarathna',
    //   role: 'Senior Accountant, Plan Management',
    //   image: teamImg3,
    //   bio: 'Tharindu is a highly skilled finance professional with more than 10 years of experience in accounting and financial management, including extensive expertise in the NDIS sector',
    //   email: 'tharindu@mydisabilitycare.org',
    //   phone: '0431 687 425',
    // },
    // {
    //   name: 'David Thompson',
    //   role: 'Support Coordinator',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    //   bio: 'David connects participants with the right services and supports for their journey.',
    //   email: 'david@mydisabilitycare.org',
    //   phone: '0431 687 426',
    // },
  ];

  return (
    <section id="team" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#6a2875] font-semibold text-sm uppercase tracking-wider">
            Our Best Team
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Our Dedicated Team Members
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Meet our passionate and experienced team committed to providing exceptional disability
            care and support services.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6a2875] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-[#6a2875]" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                      >
                        <Facebook className="w-5 h-5 text-[#6a2875]" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-[#6a2875]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#6a2875] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#6a2875] font-medium">{member.role}</p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6a2875] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6a2875] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block max-w-2xl">
            <h3 className="font-bold text-gray-900 mb-2">Join Our Team</h3>
            <p className="text-gray-600 mb-4">
              We're always looking for passionate individuals to join our mission.
              Explore career opportunities with My Disability Care.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#6a2875] hover:bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
