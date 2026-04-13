"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    // We will trigger a custom event or pass a prop for 'Gabung Aksi' action
    window.dispatchEvent(new CustomEvent("open-auth-modal"));
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "glass-nav py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo YBN */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer gap-3 group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="h-12 w-12 relative rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Image
                src="/asset/LOGO YBN_NO BG.png"
                alt="Logo YBN"
                fill
                className="object-contain"
                />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-gray-900 tracking-tight leading-none group-hover:text-primary-600 transition-colors">
                Yayasan Yuana Bhakti Nusantara
              </span>
              <span className="font-medium text-xs text-primary-600 tracking-wider uppercase mt-0.5">
                Home of Indonesia Youth Movement
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a
              href="#beranda"
              className="text-gray-900 hover:text-primary-600 font-medium transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="text-gray-900 hover:text-primary-600 font-medium transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Tentang
            </a>
            <a
              href="#visi-misi"
              className="text-gray-900 hover:text-primary-600 font-medium transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Visi Misi
            </a>
            <a
              href="#program"
              className="text-gray-900 hover:text-primary-600 font-medium transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Program
            </a>
            <a
              href="#proyek"
              className="text-gray-900 hover:text-primary-600 font-medium transition relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Jejak Langkah
            </a>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              Gabung Aksi
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-primary-600 focus:outline-none p-2 transition-colors"
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-t absolute w-full shadow-xl left-0 transition-all duration-300 ease-in-out origin-top transform ${
          isMobileMenuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3">
          <a
            href="#beranda"
            onClick={toggleMobileMenu}
            className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all border-l-4 border-transparent hover:border-primary-600 font-poppins"
          >
            <i className="fa-solid fa-house w-6 text-center"></i> Beranda
          </a>
          <a
            href="#tentang"
            onClick={toggleMobileMenu}
            className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all border-l-4 border-transparent hover:border-primary-600 font-poppins"
          >
            <i className="fa-solid fa-circle-info w-6 text-center"></i> Tentang
          </a>
          <a
            href="#program"
            onClick={toggleMobileMenu}
            className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all border-l-4 border-transparent hover:border-primary-600 font-poppins"
          >
            <i className="fa-solid fa-hand-holding-heart w-6 text-center"></i> Program
          </a>
          <div className="pt-6 mt-2 border-t border-gray-100">
            <button
              onClick={() => {
                openModal();
                toggleMobileMenu();
              }}
              className="w-full justify-center flex items-center gap-2 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-500/30 active:scale-95 transition-all hover:brightness-110"
            >
              <i className="fa-solid fa-users"></i> Gabung Aksi
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
