'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Hero, SectionHeading, Card, AnimatedSection } from './components';
import { HiCog, HiLightningBolt, HiChip, HiAdjustments, HiGlobeAlt, HiShieldCheck, HiClock, HiUserGroup } from 'react-icons/hi';

const services = [
  {
    title: 'Mechanical',
    description: 'High-quality pipes, flanges, fittings, and more for industrial applications.',
    icon: HiCog,
    link: '/oil-gas/mechanical',
  },
  {
    title: 'Electrical',
    description: 'Cables, wires, explosion-proof fittings, and electrical accessories.',
    icon: HiLightningBolt,
    link: '/oil-gas/electrical',
  },
  {
    title: 'Instrumentation',
    description: 'Precision tubes, tube fittings, valves, and manifolds for industrial systems.',
    icon: HiChip,
    link: '/oil-gas/instrumentation',
  },
  {
    title: 'Valves',
    description: 'Complete range of industrial valves including gate, globe, ball, and butterfly valves.',
    icon: HiAdjustments,
    link: '/oil-gas/valves',
  },
];

const features = [
  {
    title: 'Global Delivery',
    description: 'We deliver products all around the world with expedited shipping options.',
    icon: HiGlobeAlt,
  },
  {
    title: 'Quality Assured',
    description: 'All products meet the highest industry standards and specifications.',
    icon: HiShieldCheck,
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick processing and delivery to meet your project deadlines.',
    icon: HiClock,
  },
  {
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to serving your needs.',
    icon: HiUserGroup,
  },
];

const clients = [
  { name: 'KOC', logo: '/images/client-logos/koc-scaled-1.png' },
  { name: 'KNPC', logo: '/images/client-logos/KNPC-scaled-1.png' },
  { name: 'KIPIC', logo: '/images/client-logos/KIPIC-scaled-1.png' },
  { name: 'Equate', logo: '/images/client-logos/Equate-scaled-1.png' },
  { name: 'Joint Operations', logo: '/images/client-logos/Joint-operation-scaled-1.png' },
  { name: 'Kuwait Oil Tanker', logo: '/images/client-logos/Kuwait-oil-tanker-scaled-1.png' },
  { name: 'PIC', logo: '/images/client-logos/petrochemical-industries-company-scaled-1.jpg' },
];

const distributors = [
  { name: 'Astec', logo: '/images/distributors/astec-alli.png' },
  { name: 'DFE Engineering', logo: '/images/distributors/DFE-Engineering-al.png' },
  { name: 'Flange Guard', logo: '/images/distributors/FLANGE-GUARD.png' },
  { name: 'Oman Gasket', logo: '/images/distributors/OMAN-GASKET-alli.png' },
  { name: 'Stiram', logo: '/images/distributors/STIRAM.png' },
];

export default function Home() {
  const clientsRef = useRef(null);
  const clientsInView = useInView(clientsRef, { once: true, margin: '-100px' });

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Welcome to Princeton GTC"
        title="Your Trusted Partner in Oil & Gas Supply"
        description="Leading supplier & stockist for the complete range of Oil & Gas, Petrochemical, Power Generation, Renewable Energy, and EPC industries in Kuwait."
        showCTA
        ctaText="Get a Quote"
        ctaLink="/contact"
        secondaryCTA="Our Services"
        secondaryCTALink="/oil-gas"
        size="large"
      />

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Princeton GTC Operations"
                    width={600}
                    height={400}
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
                  A Leading Name in Oil & Gas Supply
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Princeton International General Trading Company W.L.L., located in Kuwait,
                  is one of the leading suppliers & stockist for the complete range of Oil & Gas,
                  Petrochemical, Power Generation, Renewable Energy, EPC etc.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We have agreements with several reputed vendors & manufacturers that support us
                  in any way they can with expedited delivery. Our efficient workforce works
                  tirelessly to meet our customers&apos; expectations and ensure smooth operations.
                </p>
                <Link href="/about" className="btn-secondary inline-block">
                  Learn More About Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Industrial Solutions"
            description="We provide the highest quality products and services across multiple sectors of the Oil & Gas industry."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index * 0.1}
                variant="service"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Committed to Excellence"
            description="We're dedicated to providing safe and efficient products that meet the highest industry standards."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <feature.icon className="w-8 h-8 text-[#C31C2D]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-white" ref={clientsRef}>
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Clients"
            title="Trusted by Industry Leaders"
            description="We are proud to serve some of the most prestigious companies in the Oil & Gas industry."
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={clientsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center mt-12"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={clientsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={120}
                  className="max-h-24 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Distributors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Partners"
            title="Authorized Distributors"
            description="We are the local agents and distributors for these reputed manufacturers."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mt-12">
            {distributors.map((distributor, index) => (
              <AnimatedSection key={distributor.name} delay={index * 0.1}>
                <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={distributor.logo}
                    alt={distributor.name}
                    width={150}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Contact us today for a quote or to learn more about our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Request a Quote
              </Link>
              <Link href="/gallery" className="btn-outline text-lg px-8 py-4">
                View Our Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
