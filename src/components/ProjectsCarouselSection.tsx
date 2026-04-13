"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  image: string;
  category: string;
  title: string;
  location: string;
};

const projects: Project[] = [
  { id: 1, image: "/asset/pangandaran1.JPG", category: "Bhakti Nusantara 1", title: "Pangandaran", location: "Jawa Barat" },
  { id: 2, image: "/asset/bn 1 sabira (1).jpg", category: "Bhakti Nusantara 1", title: "Pulau Sabira", location: "Kepulauan Seribu" },
  { id: 3, image: "/asset/dompu dan bintan.jpg", category: "Bhakti Nusantara 2", title: "Dompu", location: "Nusa Tenggara Barat" },
  { id: 4, image: "/asset/bn 2 bintan (1).jpg", category: "Bhakti Nusantara 2", title: "Bintan", location: "Kepulauan Riau" },
  { id: 5, image: "/asset/bn 3 bali (1).jpeg", category: "Bhakti Nusantara 3", title: "Pulau Bali", location: "Bali" },
  { id: 6, image: "/asset/bn 3 natuna (1).jpg", category: "Bhakti Nusantara 3", title: "Natuna", location: "Kepulauan Riau" },
  { id: 7, image: "/asset/bn 4 bima.jpg", category: "Bhakti Nusantara 4", title: "Bima", location: "Nusa Tenggara Barat" },
  { id: 8, image: "/asset/bn 4 bangka (1).jpg", category: "Bhakti Nusantara 4", title: "Bangka Belitung", location: "Kepulaun Bangka Belitung" },
  { id: 9, image: "/asset/bn 5 karimun.jpg", category: "Bhakti Nusantara 5", title: "Karimunjawa", location: "Jawa Tengah" },
  { id: 10, image: "/asset/bn 6 sumbawa (1).jpg", category: "Bhakti Nusantara 6", title: "Sumbawa", location: "Nusa Tenggara Barat" },
  { id: 11, image: "/asset/bn 7 pnd.jpg", category: "Bhakti Nusantara 7", title: "Pangandaran", location: "Jawa Barat" },
  { id: 12, image: "/asset/bn 8 bwi.jpg", category: "Bhakti Nusantara 8", title: "Banyuwangi", location: "Jawa Timur" },
];

export default function ProjectsCarouselSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const getScrollAmount = () => {
    if (!sliderRef.current) return 350 + 24;
    const firstCard = sliderRef.current.querySelector('[data-card]');
    return firstCard ? (firstCard as HTMLElement).offsetWidth + 24 : 350 + 24;
  };

  const scrollProjects = (direction: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction * getScrollAmount(),
        behavior: "smooth",
      });
      resetAutoSlide();
    }
  };

  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      if (sliderRef.current) {
        const scrollAmount = getScrollAmount();
        if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);
  };

  const resetAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    };
  }, []);

  return (
    <>
      <section id="proyek" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-element">
            <h2 className="text-3xl font-bold text-gray-900 font-poppins">Jejak Langkah Kami</h2>
          </div>

          {/* Project Slider Container */}
          <div
            className="relative group max-w-full"
            onMouseEnter={() => {
              if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
            }}
            onMouseLeave={startAutoSlide}
            onTouchStart={() => {
              if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
            }}
            onTouchEnd={() => {
              setTimeout(startAutoSlide, 2000);
            }}
          >
            {/* Left Button */}
            <button
              onClick={() => scrollProjects(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:outline-none"
            >
              <i className="fa-solid fa-chevron-left text-xl"></i>
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4 py-8 items-center"
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  data-card
                  className={`min-w-[280px] md:min-w-[350px] snap-center reveal-element group/card relative overflow-hidden rounded-3xl shadow-md cursor-pointer hover:shadow-2xl transition-all duration-500 h-[350px] md:h-[400px] ${
                    index % 3 === 1 ? "delay-100" : index % 3 === 2 ? "delay-200" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover/card:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover/card:opacity-100 transition-opacity">
                    <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                      <p className="text-custom-red-400 text-sm font-bold uppercase mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                      <p className="text-gray-300 text-xs">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() => scrollProjects(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:outline-none"
            >
              <i className="fa-solid fa-chevron-right text-xl"></i>
            </button>
          </div>

          <div className="mt-12 text-center reveal-element">
            <p className="text-gray-500 text-sm">
              dan 10+ mini projects lainnya “Bhakti Sapa” di Jakarta, Depok,
              Bekasi, Bandung, Yogyakarta, Malang, Medan & Agam.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial/Achievement Scroller */}
      <section className="py-12 bg-gray-900 text-white overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center reveal-element">
          <h3 className="text-gray-400 uppercase tracking-widest text-sm">
            Jejak Langkah Kami
          </h3>
        </div>
        <div className="relative flex overflow-x-hidden group hover:opacity-100 transition-opacity opacity-90">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          <div className="animate-marquee whitespace-nowrap flex gap-8 text-gray-300 font-medium text-lg">
            {[
              "Medan", "Agam", "Natuna", "Bintan", "Bangka Belitung",
              "Jakarta", "Depok", "Bekasi", "Bandung", "Cianjur",
              "Ciamis", "Pangandaran", "Jepara", "Yogyakarta", "Malang",
              "Banyuwangi", "Bali", "Sumbawa", "Dompu", "Bima"
            ].map((loc, i) => (
              <span key={i} className="flex gap-8">
                <span>{loc}</span> <span className="text-primary-500">•</span>
              </span>
            ))}
            <span>Medan</span>
          </div>
        </div>
      </section>
    </>
  );
}
