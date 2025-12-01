'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero, SectionHeading, AnimatedSection } from '../../components';
import { HiCheckCircle, HiLightningBolt } from 'react-icons/hi';

const products = [
  {
    title: 'Cables & Wires',
    description: 'Complete range of industrial cables and wires for all applications.',
    icon: HiLightningBolt,
  },
  {
    title: 'Explosion Proof Light Fittings',
    description: 'Safety-certified explosion proof lighting solutions for hazardous areas.',
    icon: HiLightningBolt,
  },
  {
    title: 'Conduit Pipes & Fittings',
    description: 'Durable conduit systems for cable protection and management.',
    icon: HiLightningBolt,
  },
  {
    title: 'Cable Glands',
    description: 'High-quality cable glands for secure cable termination.',
    icon: HiLightningBolt,
  },
  {
    title: 'Earthing & Lightning Protection',
    description: 'Comprehensive earthing and lightning protection systems.',
    icon: HiLightningBolt,
  },
  {
    title: 'Cable Pulling Accessories',
    description: 'Professional grade cable pulling and installation accessories.',
    icon: HiLightningBolt,
  },
  {
    title: 'Cadweld',
    description: 'Exothermic welding solutions for permanent electrical connections.',
    icon: HiLightningBolt,
  },
];

const features = [
  'Wide range of electrical products for industrial applications',
  'Explosion proof fittings for hazardous environments',
  'Complete cable management solutions',
  'Lightning and surge protection systems',
  'KOC and KNPC approved products',
  'Global delivery available',
];

export default function ElectricalPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Oil & Gas / Electrical"
        title="Electrical Products"
        description="Complete range of electrical products including cables, explosion proof fittings, conduit systems, and more for industrial applications."
        size="medium"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Electrical Products"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#312F94] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                  Our Electrical Products
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Powering Industrial Excellence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are the suppliers for a wide range of electrical products including Cables & wires,
                  Explosion proof light fittings, Conduit pipes & fittings, Cable glands, Earthing &
                  Lightning protection, cable pulling accessories, Cadweld and more.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-[#C31C2D] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Product Range"
            title="Our Electrical Products"
            description="Comprehensive electrical solutions for industrial applications."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((product, index) => (
              <AnimatedSection key={product.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#312F94] to-[#C31C2D] rounded-lg flex items-center justify-center mb-6">
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <AnimatedSection>
              <p className="text-white/70 font-semibold tracking-wider uppercase mb-3">
                Industries Served
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Electrical Solutions for Every Industry
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Oil & Gas', 'Petrochemical', 'Power Plants', 'Refineries', 'Marine', 'Industrial', 'Treatment Plants', 'Construction'].map((industry, index) => (
                  <div key={industry} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="font-medium">{industry}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need Electrical Products?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for competitive pricing and fast delivery on all electrical products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Request a Quote
                </Link>
                <Link href="/oil-gas" className="btn-secondary text-lg px-8 py-4">
                  View All Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
