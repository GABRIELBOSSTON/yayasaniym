"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative pt-44 pb-20 lg:pt-48 lg:pb-32 overflow-hidden h-screen min-h-[600px] flex items-center"
    >
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/asset/pangandaran.jpg"
          alt="Dokumentasi IYM"
          fill
          className="object-cover hero-bg-anim origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:w-3/4">
          <div className="reveal-element inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute opacity-75"></span>
            <span className="w-2 h-2 bg-green-400 rounded-full relative"></span>
            <span className="text-white font-medium text-sm tracking-wide">
              AHU-0013235.AH.01.12/2025
            </span>
          </div>
          <h1 className="reveal-element delay-100 text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-poppins">
            Yayasan Yuana <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400">
              Bhakti Nusantara
            </span>
          </h1>
          <p className="reveal-element delay-200 text-2xl text-gray-200 mb-8 font-serif italic border-l-4 border-primary-500 pl-4">
            "Merajut Asa di Setiap Sudut Nusantara"
          </p>
          <p className="reveal-element delay-300 text-gray-300 mb-10 max-w-2xl text-lg leading-relaxed">
            Wadah Penggerak Perubahan Sosial yang menaungi{" "}
            <strong>Indonesia Youth Movement.</strong>
            Membangun negeri melalui bidang pendidikan, kesehatan, lingkungan
            ekonomi kreatif, dan kesetaraan. Mari turut serta berkontribusi!
          </p>
          <div className="reveal-element delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() =>
                document.getElementById("program")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative z-30 w-full sm:w-auto group bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-primary-900/50 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Lihat Program Kami{" "}
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
