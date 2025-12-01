'use client';

import Image from 'next/image';
import { Hero, SectionHeading, AnimatedSection } from '../components';
import { HiCheckCircle, HiShieldCheck, HiUserGroup, HiLightBulb, HiGlobeAlt, HiTruck } from 'react-icons/hi';

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on the quality of our products and services.',
    icon: HiShieldCheck,
  },
  {
    title: 'Customer Focus',
    description: 'Our customers\' satisfaction is at the heart of everything we do.',
    icon: HiUserGroup,
  },
  {
    title: 'Innovation',
    description: 'We continuously improve our processes and embrace new technologies.',
    icon: HiLightBulb,
  },
  {
    title: 'Global Reach',
    description: 'We deliver products to customers all around the world.',
    icon: HiGlobeAlt,
  },
  {
    title: 'Reliability',
    description: 'Dependable service and consistent product quality you can count on.',
    icon: HiCheckCircle,
  },
  {
    title: 'Fast Delivery',
    description: 'Expedited shipping options to meet your project deadlines.',
    icon: HiTruck,
  },
];

const commitments = [
  'Products developed, manufactured, and distributed in full compliance with statutory and regulatory requirements',
  'High integrity local supply with complete traceability',
  'Comprehensive quality systems for power, petrochemical, oil and gas, subsea and renewable energy industries',
  'Meeting exacting market demands through innovation',
  'KOC and KNPC approved materials',
  'Agreement with several reputed vendors and manufacturers',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="About Us"
        title="Your Trusted Partner Since Day One"
        description="Princeton International General Trading Company W.L.L. - A leading name in Oil & Gas supply in Kuwait."
        size="medium"
      />

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Princeton GTC Team"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#312F94] rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C31C2D] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  A Little About Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Princeton International General Trading Company W.L.L., located in Kuwait,
                  is one of the leading suppliers & stockist for the complete range of Oil & Gas,
                  Petrochemical, Power Generation, Renewable Energy, EPC etc.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This ranges from Carbon Steel, Stainless Steel, Alloy steel Pipes & fittings,
                  Tube & Tube Fittings, Valves, Nuts & bolts, Gaskets etc. We have agreement with
                  several reputed vendors & manufacturers that support us in anyway they can with
                  expedited delivery.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We have an efficient workforce that work tirelessly to meet our customers
                  expectation and smooth operation. We have the competence and commitment to serve
                  for any industry that comes our way and fulfill their demand within the given time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div>
                <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                  Our Commitment
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Quality & Excellence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our quality team guarantee you that all your requirements will be handled with
                  highest priority to meet the customer requirements and to meet the relevant
                  specification.
                </p>
                <ul className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-[#C31C2D] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Image
                    src="/images/certifications/iso.jpg"
                    alt="ISO Certified"
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900">ISO Certified</h4>
                  <p className="text-sm text-gray-500">Quality Management</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Image
                    src="/images/certifications/ASIB-Logo.png"
                    alt="ASIB Certified"
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900">ASIB Member</h4>
                  <p className="text-sm text-gray-500">Industry Association</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center text-white">
              <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3 bg-white/10 inline-block px-4 py-1 rounded-full">
                Mission Statement
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Committed to Quality & Continuous Improvement
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Quality and continuous improvement are our top priorities. We&apos;re committed to
                providing safe and efficient products that are developed, manufactured, and
                distributed in full compliance with statutory and regulatory requirements and
                our core values.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We understand that the markets we serve have exacting demands and aim to meet
                them through high integrity local supply, innovation, and traceability. We&apos;ve
                developed comprehensive quality systems to serve the power, petrochemical,
                oil and gas, subsea and renewable energy industries, and the markets they serve.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every service we provide."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#312F94] to-[#C31C2D] rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Industries We Serve"
            title="Catering to Multiple Sectors"
            description="We provide products and services to a wide range of industries."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {[
              'Oil & Gas',
              'Petrochemical',
              'Power Plants',
              'Treatment Plants',
              'Drilling',
              'Exploration',
              'Renewable Energy',
              'EPC',
              'Subsea',
              'Marine',
              'Refinery',
              'Industrial',
            ].map((industry, index) => (
              <AnimatedSection key={industry} delay={index * 0.05}>
                <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <p className="font-semibold text-gray-800">{industry}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
