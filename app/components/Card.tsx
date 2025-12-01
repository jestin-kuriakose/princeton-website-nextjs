'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  description?: string;
  icon?: IconType;
  image?: string;
  link?: string;
  delay?: number;
  variant?: 'default' | 'service' | 'product';
}

export default function Card({
  title,
  description,
  icon: Icon,
  image,
  link,
  delay = 0,
  variant = 'default',
}: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const cardContent = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`card-hover bg-white rounded-xl overflow-hidden ${
        variant === 'service' ? 'p-8' : ''
      } ${image ? 'shadow-lg' : 'border border-gray-100 shadow-md'}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div className={image ? 'p-6' : ''}>
        {Icon && (
          <div className="w-14 h-14 bg-gradient-to-br from-[#312F94] to-[#C31C2D] rounded-lg flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-white" />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
        {link && (
          <div className="mt-4">
            <span className="text-[#C31C2D] font-semibold inline-flex items-center group-hover:gap-2 transition-all">
              Learn More
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link} className="group block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
