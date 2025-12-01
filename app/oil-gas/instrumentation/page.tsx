'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero, SectionHeading, AnimatedSection } from '../../components';
import { HiCheckCircle } from 'react-icons/hi';

const tubeFittings = [
  'Double & Single Ferrule Compression Tube Fittings',
  'Condensate Pots',
  'Flushing Rings',
  'Instrument Sunshade/ Canopy',
  'Instrument Mounting Plates',
];

const fasteners = [
  'Stud bolts',
  'Stud bolt Assemblies',
  'Hex Bolts',
  'Heavy Hexagon Bolts',
  'Spherical Faced Nuts',
  '12 Point (Bi-Hex) Bolts & Nuts',
  'Setscrews',
  'Socket Screws',
  'Socket Cap Screws',
  'Engineer Studs',
  'Cap Nuts',
  'Waisted Studs',
];

const productImages = [
  { src: '/images/products/instrumentation/tubing-product.png', alt: 'Tubing Products' },
  { src: '/images/products/instrumentation/valves-product.png', alt: 'Valves' },
  { src: '/images/products/instrumentation/valves2.png', alt: 'Instrumentation Valves' },
  { src: '/images/products/instrumentation/DBB-valves.png', alt: 'DBB Valves' },
  { src: '/images/products/instrumentation/integrated-product.png', alt: 'Integrated Products' },
  { src: '/images/products/instrumentation/top_big_img.png', alt: 'Instrumentation Equipment' },
];

export default function InstrumentationPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Oil & Gas / Instrumentation"
        title="Instrumentation Products"
        description="Precision instrumentation products including tube fittings, valves, manifolds, and fasteners for industrial systems."
        size="medium"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                Our Instrumentation Products
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Engineering for Industrial Systems
              </h2>
              <p className="text-lg text-gray-600">
                Our instrumentation product range includes the supply of Seamless tubes, copper tubes,
                Monel tubing, tube fittings, Tee fittings, valves & manifolds for industrial systems.
                We deliver products all around the world with the highest quality standards.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tube Fittings Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/instrumentation/tubing-product.png"
                  alt="Instrumentation Tube Fittings"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Instrumentation Tube Fittings
                </h3>
                <p className="text-gray-600 mb-6">
                  High-quality tube fittings and accessories for precise instrumentation applications.
                </p>
                <ul className="space-y-3">
                  {tubeFittings.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-[#C31C2D] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fasteners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right" className="lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/products/instrumentation/integrated-product.png"
                  alt="Fasteners"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2} className="lg:order-1">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Fasteners
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete range of industrial fasteners for all your instrumentation needs.
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {fasteners.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <HiCheckCircle className="w-4 h-4 text-[#C31C2D] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Product Gallery"
            title="Our Instrumentation Products"
            description="A showcase of our precision instrumentation products."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {productImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Instrumentation Products?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Contact us today for competitive pricing and fast delivery on all instrumentation products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Request a Quote
                </Link>
                <Link href="/oil-gas" className="btn-outline text-lg px-8 py-4">
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
