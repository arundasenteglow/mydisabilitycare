import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Cta() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#6a2875] to-[#ff9500] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                Get Started Today
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Get Disability Benefits from My Disability Care
            </h2>

            <p className="text-lg text-blue-50 leading-relaxed">
              Take the first step towards receiving quality disability support services.
              Our team is ready to help you navigate your NDIS plan and access the care you deserve.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-blue-50">Free consultation and assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-blue-50">Personalized care plans tailored to your needs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-blue-50">NDIS registered and compliant provider</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-blue-50">Experienced and compassionate support team</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-white text-[#6a2875] hover:bg-blue-50 px-8 py-6 text-lg shadow-xl">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-black hover:bg-white/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Contact Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6a2875] to-[#ff9500] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Call Us Anytime</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our support team is available 24/7 to answer your questions
                  </p>
                  <a
                    href="tel:0431687423"
                    className="text-[#6a2875] font-bold text-xl hover:text-[#1e3a8a] transition-colors"
                  >
                    0431 687 423
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Send us an email and we'll respond within 24 hours
                  </p>
                  <a
                    href="mailto:info@mydisabilitycare.org"
                    className="text-[#6a2875] font-bold hover:text-[#1e3a8a] transition-colors break-all"
                  >
                    info@mydisabilitycare.org
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="font-bold text-3xl text-white mb-1">1000+</div>
                <div className="text-sm text-blue-100">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="font-bold text-3xl text-white mb-1">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
