'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero, SectionHeading, AnimatedSection } from '../../components';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';

const products = [
  {
    title: 'Pipes & Tubes',
    description: 'Complete range of pipes and tubes for industrial applications.',
    items: [
      'C.S. & S.S ERW Pipes',
      'C.S. & S.S SEAMLESS PIPES',
      'C.S. & S.S LSAW Pipes',
      'Double Random Lengths (DRL) and Single Random Lengths (SRL)',
      'All Grades of SS, CS, Duplex, Alloy Steel',
      'All KOC & KNPC Approved Manufacturer',
    ],
    image: '/images/products/mechanical/PIPE-FITTNGS1.webp',
  },
  {
    title: 'Flanges',
    description: 'Wide variety of flanges for all industrial requirements.',
    items: [
      'Weld Neck Flanges',
      'Slip-On Flanges',
      'Blind Flanges',
      'Socket Weld',
      'Lap Joint',
      'Rubber Flexible & Expansion Joints',
      'Swivel Ring Flanges',
      'Spectacle Blinds, Spade & Spacer',
      'Threaded',
      'Size: ½" to 60″ - ANSI 150lb to 2500lb',
    ],
    image: '/images/products/mechanical/PIPE-FITTNGS2.webp',
  },
  {
    title: 'Pipe Fittings',
    description: 'Comprehensive range of pipe fittings for various applications.',
    items: [
      'Butt-Weld Fittings & Forged Fittings',
      'Socket-Weld, Butt-Weld, Threaded',
      'Elbow (45 & 90 Deg), Reducer, Equal Tee, Reducing Tee',
      'Reducer (Con & Ecc), Pipe Nipple, Swage Nipple',
      'Couplings, O-lets (Flangolet, Nippolet, Weldolet, Sockolet, Threadolet, Lateral Tee)',
      'Range: ½" to 4″ – ANSI 3000, 6000, 9000 lb',
      'Malleable iron pipe fittings',
    ],
    image: '/images/products/mechanical/PIPE-FITTNGS3.webp',
  },
];

const productImages = [
  '/images/products/mechanical/PIPE-FITTNGS1.webp',
  '/images/products/mechanical/PIPE-FITTNGS2.webp',
  '/images/products/mechanical/PIPE-FITTNGS3.webp',
  '/images/products/mechanical/PIPE-FITTNGS4.jpg',
  '/images/products/mechanical/PIPE-FITTNGS5.jpg',
  '/images/products/mechanical/PIPE-FITTNGS6.jpg',
];

export default function MechanicalPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Oil & Gas / Mechanical"
        title="Mechanical Products"
        description="High-quality pipes, flanges, fittings, and more for industrial applications. All KOC & KNPC approved manufacturers."
        size="medium"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                Our Mechanical Products
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Quality for Every Application
              </h2>
              <p className="text-lg text-gray-600">
                We provide the highest quality mechanical products like Pipes (Seamless and Welded pipes),
                Flanges, Fittings (Elbows & Tees), Fasteners, Valves, Gaskets & Packing and many more
                to any part of the globe. All grades of SS, CS, Duplex, Alloy Steel available with
                KOC & KNPC approved manufacturers.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {products.map((product, index) => (
              <AnimatedSection key={product.title} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <HiCheckCircle className="w-5 h-5 text-[#C31C2D] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            title="Our Mechanical Products"
            description="A showcase of our high-quality mechanical products."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {productImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={image}
                    alt={`Mechanical Product ${index + 1}`}
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

      {/* CTA Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Mechanical Products?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Contact us today for competitive pricing and fast delivery on all mechanical products.
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
