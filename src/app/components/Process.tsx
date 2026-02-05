import { FileText, UserCheck, ClipboardList, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Initial Consultation',
      description: 'Get in touch with us to discuss your needs, goals, and how we can best support you.',
      color: 'bg-blue-500',
    },
    {
      number: '02',
      icon: UserCheck,
      title: 'Assessment & Planning',
      description: 'We conduct a thorough assessment and work with you to create a personalized care plan.',
      color: 'bg-indigo-500',
    },
    {
      number: '03',
      icon: ClipboardList,
      title: 'Team Matching',
      description: 'We match you with the perfect support workers who align with your preferences and needs.',
      color: 'bg-purple-500',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Begin Your Journey',
      description: 'Start receiving quality care and support to help you achieve your goals and live independently.',
      color: 'bg-pink-500',
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#6a2875] font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900">
            Begin Your Journey in Just 4 Simple Steps
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Getting started with My Disability Care is easy. Follow our simple process and begin
            receiving the quality support you deserve.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#6a2875] to-[#ff9500] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 mt-2`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 -right-4 text-gray-300 text-2xl hidden xl:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                {/* Number and Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6a2875] to-[#ff9500] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 inline-block">
            <h3 className="font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-4">Contact us today for a free consultation</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#6a2875] hover:bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
