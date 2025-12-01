'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero, SectionHeading, AnimatedSection } from '../../components';
import { HiCheckCircle } from 'react-icons/hi';

const valveTypes = [
  {
    category: 'Industrial Valves',
    items: [
      'Gate, Globe, Check, Ball, Butterfly Valves',
      'Double Block & Bleed Valves',
      'Monoflange valves',
      'Sampling DBB\'s',
      'Piping Trunnion, Floating Ball & DBB Valves',
    ],
  },
  {
    category: 'Instrumentation Valves',
    items: [
      'Instrumentation Valves & Manifolds',
      'Needle Valves',
      'Gauge Root Valves',
      'Ball valves – 2,3 ways',
      '2, 3, 4, 5 & MESC Manifold valves',
      'Check & Relief valves',
    ],
  },
  {
    category: 'Strainers',
    items: [
      'Y Strainer',
      'Tee Strainer',
      'Basket Strainer',
      'Conical Strainer',
      'Suction Diffuser',
      'Mud Box',
    ],
  },
];

const galleryImages = [
  '/images/gallery/valves/KNIFE-EDGE-GATE-VALVES.jpg',
  '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-1-scaled.jpg',
  '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-2-scaled.jpg',
  '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-3-scaled.jpg',
  '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-3-1-scaled.jpg',
  '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-4-scaled.jpg',
];

export default function ValvesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Oil & Gas / Valves"
        title="Industrial Valves"
        description="Complete range of industrial valves including gate, globe, ball, butterfly valves, DBB valves, and various strainers."
        size="medium"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/valves/KNIFE-EDGE-GATE-VALVES.jpg"
                  alt="Industrial Valves"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                  Our Valve Products
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Complete Valve Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We offer a comprehensive range of industrial valves for various applications
                  in the Oil & Gas, Petrochemical, Power Generation, and other industries.
                  Our valves are sourced from reputed manufacturers and meet the highest
                  quality standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From standard gate and globe valves to specialized double block & bleed
                  valves and instrumentation manifolds, we have the right solution for your needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Product Range"
            title="Our Valve Products"
            description="Explore our comprehensive range of valves and strainers."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {valveTypes.map((category, index) => (
              <AnimatedSection key={category.category} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <HiCheckCircle className="w-5 h-5 text-[#C31C2D] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Product Gallery"
            title="Knife Edge Gate Valves"
            description="Showcase of our high-quality knife edge gate valves - Kuwait supplier."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={image}
                    alt={`Valve Product ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <AnimatedSection>
              <p className="text-white/70 font-semibold tracking-wider uppercase mb-3">
                Applications
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Oil & Gas', 'Petrochemical', 'Power Plants', 'Refineries', 'Water Treatment', 'Marine', 'Chemical', 'Pharmaceutical'].map((industry) => (
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
                Need Industrial Valves?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for competitive pricing and fast delivery on all valve products.
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
