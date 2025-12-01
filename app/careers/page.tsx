'use client';

import Link from 'next/link';
import { Hero, SectionHeading, AnimatedSection } from '../components';
import { HiUserGroup, HiAcademicCap, HiTrendingUp, HiHeart, HiBriefcase, HiMail } from 'react-icons/hi';

const benefits = [
  {
    title: 'Growth Opportunities',
    description: 'We invest in our employees\' professional development and career advancement.',
    icon: HiTrendingUp,
  },
  {
    title: 'Learning & Development',
    description: 'Continuous training programs to enhance your skills and knowledge.',
    icon: HiAcademicCap,
  },
  {
    title: 'Team Culture',
    description: 'Work with a collaborative and supportive team of professionals.',
    icon: HiUserGroup,
  },
  {
    title: 'Work-Life Balance',
    description: 'We value your personal time and promote a healthy work-life balance.',
    icon: HiHeart,
  },
];

const values = [
  'Integrity in all our dealings',
  'Commitment to excellence',
  'Respect for our employees',
  'Continuous improvement',
  'Customer satisfaction',
  'Safety first approach',
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Join Our Team"
        title="Careers at Princeton GTC"
        description="Be part of a dynamic team serving the Oil & Gas industry. Explore opportunities to grow your career with us."
        size="medium"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-[#C31C2D] font-semibold tracking-wider uppercase mb-3">
                Why Work With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build Your Career With Princeton GTC
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Princeton International General Trading Company, we believe our employees are our
                greatest asset. We&apos;re committed to creating a workplace where talented individuals
                can thrive, grow, and make a meaningful impact in the Oil & Gas industry.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Employee Benefits"
            title="What We Offer"
            description="Join a company that values and invests in its people."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow h-full text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#312F94] to-[#C31C2D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-[#312F94]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center text-white mb-12">
                <p className="text-white/70 font-semibold tracking-wider uppercase mb-3">
                  Our Values
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  What We Stand For
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="w-3 h-3 bg-[#C31C2D] rounded-full flex-shrink-0" />
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Current Openings"
            title="Job Opportunities"
            description="Explore our current job openings and find your next career opportunity."
          />

          <AnimatedSection delay={0.2}>
            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-gray-50 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiBriefcase className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Current Openings
                </h3>
                <p className="text-gray-600 mb-8">
                  We don&apos;t have any open positions at the moment, but we&apos;re always looking for
                  talented individuals to join our team. Please check back later or send us your
                  resume for future opportunities.
                </p>
                <a
                  href="mailto:sales@princetongtc.com?subject=Career Inquiry"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <HiMail className="w-5 h-5" />
                  Send Your Resume
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Even if there are no current openings, we&apos;d love to hear from you.
                Send us your resume and we&apos;ll keep it on file for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sales@princetongtc.com?subject=Career Inquiry"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
                >
                  <HiMail className="w-5 h-5" />
                  Contact Us
                </a>
                <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                  Learn About Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
