"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-auth-modal", handleOpenModal);
    return () => window.removeEventListener("open-auth-modal", handleOpenModal);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Mari Turut Berkontribusi */}
      <section id="kontribusi" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal-element text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-12">
            Mari Turut Berkontribusi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Button 1: Donasi */}
            <div className="reveal-element delay-100 h-full">
              <a
                href="https://wa.me/6285126724272?text=Halo%20Yayasan%20Yuana%20Bhakti%20Nusantara,%20saya%20ingin%20berkontribusi%20melalui%20donasi."
                className="group block h-full p-8 bg-primary-50 hover:bg-primary-600 border border-primary-100 rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl flex flex-col items-center text-center justify-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  Donasi
                </h3>
              </a>
            </div>

            {/* Button 2: Kolaborasi CSR */}
            <div className="reveal-element delay-200 h-full">
              <a
                href="https://wa.me/6285126724272?text=Halo%20Yayasan%20Yuana%20Bhakti%20Nusantara,%20saya%20tertarik%20untuk%20kolaborasi%20CSR."
                className="group block h-full p-8 bg-green-50 hover:bg-green-600 border border-green-100 rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl flex flex-col items-center text-center justify-start"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-md">
                  <i className="fa-solid fa-building-circle-check"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  Kolaborasi CSR
                </h3>
                <p className="text-gray-500 group-hover:text-green-50 text-sm transition-colors leading-relaxed">
                  Sinergi perusahaan untuk menciptakan dampak sosial berkelanjutan bagi negeri.
                </p>
              </a>
            </div>

            {/* Button 3: Kolaborasi Program */}
            <div className="reveal-element delay-300 h-full">
              <a
                href="https://wa.me/6285126724272?text=Halo%20Yayasan%20Yuana%20Bhakti%20Nusantara,%20saya%20ingin%20mengajak%20kolaborasi%20program."
                className="group block h-full p-8 bg-purple-50 hover:bg-purple-600 border border-purple-100 rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl flex flex-col items-center text-center justify-start"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <i className="fa-solid fa-puzzle-piece"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  Kolaborasi Program
                </h3>
                <p className="text-gray-500 group-hover:text-purple-50 text-sm transition-colors leading-relaxed">
                  Jalin kemitraan strategis dalam pengembangan program inovatif bersama kami.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 reveal-element">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4 gap-3">
                <div className="relative h-12 w-12 rounded-md shadow-sm">
                  <Image src="/asset/LOGO YBN_NO BG.png" alt="Logo YBN" fill className="object-contain" />
                </div>
                <div>
                  <span className="block font-bold text-xl text-gray-900 leading-none">
                    Yayasan Yuana Bhakti Nusantara
                  </span>
                  <span className="text-sm text-gray-500">Indonesia Youth Movement</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">
                AHU-0013235.AH.01.12/2025
              </p>
              <p className="text-gray-600 italic mb-6 font-serif">
                "Merajut Asa di Setiap Sudut Nusantara"
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary-500 after:mt-1">
                Hubungi Kami
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2 hover:text-primary-600 transition-colors">
                  <i className="fa-regular fa-envelope w-5 mt-1"></i>{" "}
                  <span className="break-all">
                    yuanabhaktinusantara@gmail.com / youthmovement.idn@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                  <i className="fa-brands fa-whatsapp w-5"></i> +62 851-2672-4272
                </li>
                <li className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                  <i className="fa-solid fa-location-dot w-5"></i> Indonesia
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary-500 after:mt-1">
                Social Media
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/indonesiayouthmovement/"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@indonesiayouthmovement"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/yayasan-yuana-bhakti-nusantara"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Yayasan Yuana Bhakti Nusantara.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0 group cursor-default">
              Made with <i className="fa-solid fa-heart text-custom-red-600 animate-pulse"></i> for Indonesia
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Auth / Bergabung */}
      <div
        className={`fixed inset-0 bg-gray-900/70 z-[60] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div
          className={`bg-white w-full max-w-md rounded-2xl shadow-2xl transform transition-all duration-300 overflow-hidden ${
            isModalOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Bergabung</h3>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-custom-red-500 transition-colors transform hover:rotate-90 duration-300"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl animate-bounce">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Jadi Relawan Sekarang!</h4>
            <p className="text-gray-600 mb-6">
              Silakan hubungi kami via WhatsApp untuk pendaftaran relawan terbaru dan info kegiatan.
            </p>
            <a
              href="https://wa.me/6285126724272"
              className="inline-block w-full py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
