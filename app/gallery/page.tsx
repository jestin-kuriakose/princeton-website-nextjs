'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero, SectionHeading, AnimatedSection } from '../components';
import { HiX } from 'react-icons/hi';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'valves', name: 'Valves' },
  { id: 'mechanical', name: 'Mechanical' },
  { id: 'instrumentation', name: 'Instrumentation' },
];

const galleryItems = [
  // Valves
  { id: 1, src: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVES.jpg', alt: 'Knife Edge Gate Valves', category: 'valves', title: 'Knife Edge Gate Valves' },
  { id: 2, src: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-1-scaled.jpg', alt: 'Knife Edge Gate Valve', category: 'valves', title: 'Knife Edge Gate Valve' },
  { id: 3, src: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-2-scaled.jpg', alt: 'Knife Edge Gate Valve', category: 'valves', title: 'Knife Edge Gate Valve' },
  { id: 4, src: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-3-scaled.jpg', alt: 'Knife Edge Gate Valve', category: 'valves', title: 'Knife Edge Gate Valve' },
  { id: 5, src: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-3-1-scaled.jpg', alt: 'Knife Edge Gate Valve', category: 'valves', title: 'Knife Edge Gate Valve' },
  { id: 6, src: '/images/gallery/valves/KNIFE-EDGE-GATE-VALVE-KUWAIT-SUPPLIER-4-scaled.jpg', alt: 'Knife Edge Gate Valve', category: 'valves', title: 'Knife Edge Gate Valve' },
  // Mechanical
  { id: 7, src: '/images/products/mechanical/PIPE-FITTNGS1.webp', alt: 'Pipe Fittings', category: 'mechanical', title: 'Pipe Fittings' },
  { id: 8, src: '/images/products/mechanical/PIPE-FITTNGS2.webp', alt: 'Pipe Fittings', category: 'mechanical', title: 'Flanges' },
  { id: 9, src: '/images/products/mechanical/PIPE-FITTNGS3.webp', alt: 'Pipe Fittings', category: 'mechanical', title: 'Pipe Fittings' },
  { id: 10, src: '/images/products/mechanical/PIPE-FITTNGS4.jpg', alt: 'Pipe Fittings', category: 'mechanical', title: 'Industrial Pipes' },
  { id: 11, src: '/images/products/mechanical/PIPE-FITTNGS5.jpg', alt: 'Pipe Fittings', category: 'mechanical', title: 'Stainless Steel Pipes' },
  { id: 12, src: '/images/products/mechanical/PIPE-FITTNGS6.jpg', alt: 'Pipe Fittings', category: 'mechanical', title: 'Carbon Steel Pipes' },
  // Instrumentation
  { id: 13, src: '/images/products/instrumentation/tubing-product.png', alt: 'Tubing Products', category: 'instrumentation', title: 'Tube Fittings' },
  { id: 14, src: '/images/products/instrumentation/valves-product.png', alt: 'Instrumentation Valves', category: 'instrumentation', title: 'Instrumentation Valves' },
  { id: 15, src: '/images/products/instrumentation/valves2.png', alt: 'Valves', category: 'instrumentation', title: 'Manifold Valves' },
  { id: 16, src: '/images/products/instrumentation/DBB-valves.png', alt: 'DBB Valves', category: 'instrumentation', title: 'DBB Valves' },
  { id: 17, src: '/images/products/instrumentation/integrated-product.png', alt: 'Integrated Products', category: 'instrumentation', title: 'Integrated Systems' },
  { id: 18, src: '/images/products/instrumentation/top_big_img.png', alt: 'Instrumentation', category: 'instrumentation', title: 'Instrumentation Equipment' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Our Products"
        title="Product Gallery"
        description="Explore our comprehensive range of industrial products for Oil & Gas, Petrochemical, and Power Generation industries."
        size="medium"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Browse Our Products"
            title="Product Showcase"
            description="Filter by category to find the products you're looking for."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#312F94] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <HiX className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-xl font-semibold">{selectedImage.title}</p>
                <p className="text-gray-300 capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interested in Our Products?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for detailed specifications, pricing, and availability.
              </p>
              <a href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
                Request a Quote
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
