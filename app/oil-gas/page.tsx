'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero, SectionHeading, AnimatedSection } from '../components';
import { HiCog, HiLightningBolt, HiChip, HiAdjustments, HiArrowRight } from 'react-icons/hi';

const services = [
  {
    title: 'Mechanical',
    description: 'We provide the highest quality mechanical products like Pipes (Seamless and Welded pipes), Flanges, Fittings (Elbows & Tees), Fasteners, Valves, Gaskets & Packing and many more to any part of the globe.',
    icon: HiCog,
    link: '/oil-gas/mechanical',
    image: '/images/products/mechanical/PIPE-FITTNGS1.webp',
    features: ['Pipes & Tubes', 'Flanges', 'Pipe Fittings', 'All KOC & KNPC Approved'],
  },
  {
    title: 'Electrical',
    description: 'We are the suppliers for a wide range of electrical products like Cables & wires, Explosion proof light fittings, Conduit pipes & fittings, Cable glands, Earthing & Lightning protection, cable pulling accessories, Cadweld etc.',
    icon: HiLightningBolt,
    link: '/oil-gas/electrical',
    image: '/images/hero.jpg',
    features: ['Cables & Wires', 'Explosion Proof Fittings', 'Conduit Pipes', 'Cable Glands'],
  },
  {
    title: 'Instrumentation',
    description: 'Our instrumentation product range include the supply of Seamless tubes, copper tubes, Monel tubing, tube fittings, Tee fittings, valves & manifolds for industrial systems.',
    icon: HiChip,
    link: '/oil-gas/instrumentation',
    image: '/images/products/instrumentation/tubing-product.png',
    features: ['Tube Fittings', 'Instrument Valves', 'Manifolds', 'Fasteners'],
  },
  {
    title: 'Valves',
    description: 'Complete range of industrial valves including Gate, Globe, Check, Ball, Butterfly Valves, Double Block & Bleed Valves, Monoflange valves, and various strainers.',
    icon: HiAdjustments,
    link: '/oil-gas/valves',
    image: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVES.jpg',
    features: ['Gate & Globe Valves', 'Ball & Butterfly Valves', 'DBB Valves', 'Strainers'],
  },
];

const oilGasServices = [
  'Stockists & Suppliers of Pipes, Tubes, Fittings, Flanges, Valves, Gaskets & Stud Bolts',
  'Supply of Oil Field materials and equipments',
  'Supplier of KOC and KNPC approved materials',
  'Catering to Oil, Gas & Energy Industries, petrochemical, power plants, Treatment plants, Drilling, Exploration etc.',
];

export default function OilGasPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Our Services"
        title="Oil & Gas Solutions"
        description="Comprehensive industrial solutions for the Oil & Gas, Petrochemical, Power Generation, and Renewable Energy industries."
        size="medium"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services in Oil & Gas Industry
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We promise the best quality products and services across all our divisions.
                Our comprehensive range of products serves various industries worldwide.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ul className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                {oilGasServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#C31C2D] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Divisions"
            title="Explore Our Services"
            description="Click on any service to learn more about our product offerings."
          />

          <div className="space-y-16 mt-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#312F94] to-[#C31C2D] rounded-lg flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#C31C2D] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 btn-primary"
                    >
                      Learn More
                      <HiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#312F94]/95 to-[#C31C2D]/90" />

        <div className="relative z-10 container-custom text-center text-white">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your specific requirements. We&apos;re here to help.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
