import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 reveal-element">
              <h2 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary-600 inline-block"></span>{" "}
                Tentang Kami
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
                Mengenal Yayasan <br />
                Yuana Bhakti Nusantara
              </h3>
              <div className="prose prose-lg text-gray-600 text-justify">
                <p>
                  Yayasan Yuana Bhakti Nusantara <strong>YBN</strong> merupakan
                  organisasi sosial berbadan hukum yang menaungi Indonesia Youth
                  Movement (IYM). Kami hadir sebagai wadah inklusif yang terbuka
                  bagi siapa pun yang peduli dan ingin berkontribusi bagi negeri.
                </p>
                <p className="mt-4">
                  Fokus kami murni pada kemanusiaan dan pembangunan berkelanjutan
                  melalui 5 pilar utama: Pendidikan, Kesehatan, Lingkungan, Ekonomi
                  Kreatif, dan Kesetaraan.
                </p>
              </div>

              {/* Legal Badge */}
              <div className="mt-8 flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl animate-float">
                  <i className="fa-solid fa-file-shield"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Legalitas Resmi
                  </p>
                  <p className="text-gray-900 font-semibold">
                    AHU-0013235.AH.01.12/2025
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins reveal-element">
                Value Kami
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="reveal-element delay-100 bg-primary-50 p-6 rounded-2xl border border-primary-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-primary-600 text-xl">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Kolaborasi Strategis
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sinergi pemerintah, komunitas, dan masyarakat untuk dampak
                    maksimal.
                  </p>
                </div>
                <div className="reveal-element delay-200 bg-custom-red-100/50 p-6 rounded-2xl border border-custom-red-400/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-custom-red-600 text-xl">
                    <i className="fa-solid fa-people-carry-box"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Pemberdayaan Inklusif
                  </h4>
                  <p className="text-sm text-gray-600">
                    Menciptakan kemandirian masyarakat secara berkelanjutan.
                  </p>
                </div>
                <div className="reveal-element delay-300 bg-green-50 p-6 rounded-2xl border border-green-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-green-600 text-xl">
                    <i className="fa-solid fa-seedling"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Keberlanjutan</h4>
                  <p className="text-sm text-gray-600">
                    Program jangka panjang yang relevan dengan kebutuhan lokal.
                  </p>
                </div>
                <div className="reveal-element delay-100 bg-orange-50 p-6 rounded-2xl border border-orange-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-orange-600 text-xl">
                    <i className="fa-solid fa-universal-access"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Akses untuk Semua</h4>
                  <p className="text-sm text-gray-600">
                    Keadilan sosial tanpa memandang latar belakang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Details (Kenapa IYM?) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative reveal-element">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full opacity-50 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/30 rounded-full opacity-50 blur-3xl animate-pulse delay-100"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 w-full hover:scale-[1.02] transition-transform duration-500 aspect-video">
                  <Image
                  src="/asset/kenapa iym.png"
                  alt="Teamwork"
                  fill
                  className="object-cover"
                  />
              </div>
            </div>
            <div className="lg:w-1/2 reveal-element delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kenapa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Indonesia Youth Movement
                </span>
                ?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Kami telah melaksanakan lebih dari 40 project baik offline maupun
                online di berbagai daerah di Indonesia, dan berkerja sama dengan
                berbagai instansi baik pemerintah, swasta, media, dan komunitas
                lokal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="visi-misi" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/50 rounded-l-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-custom-red-900/40 rounded-r-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal-element">
            <h2 className="text-3xl font-bold font-poppins mb-4 inline-block relative after:content-[''] after:block after:w-12 after:h-1 after:bg-primary-500 after:mx-auto after:mt-2 after:rounded-full">
              Visi & Misi
            </h2>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mt-4">
              Menjadi organisasi penggerak perubahan sosial yang menghadirkan
              akses, fasilitas, keadilan, dan pemberdayaan bagi masyarakat melalui
              aksi-aksi kolaboratif yang berkualitas, inklusif, dan berkelanjutan,
              khususnya di bidang pendidikan, kesehatan, lingkungan, ekonomi
              kreatif, serta kesetaraan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Mission Cards */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/20 reveal-element delay-100">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-primary-400 transition-colors">
                Pendidikan
              </h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Akses fasilitas & dukungan belajar berkualitas.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-custom-red-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-custom-red-500/20 reveal-element delay-200">
              <div className="w-10 h-10 rounded-full bg-custom-red-500/20 flex items-center justify-center text-custom-red-400 mb-4 group-hover:bg-custom-red-500 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-custom-red-400 transition-colors">
                Kesehatan
              </h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Edukasi preventif & akses layanan dasar.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20 reveal-element delay-300">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-green-400 transition-colors">
                Lingkungan
              </h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Pelestarian alam & aksi keberlanjutan.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/20 reveal-element delay-100">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-orange-400 transition-colors">
                Ekonomi Kreatif
              </h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Kemandirian berbasis potensi lokal.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 reveal-element delay-200">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <h4 className="font-bold mb-2 group-hover:text-purple-400 transition-colors">
                Kesetaraan
              </h4>
              <p className="text-xs text-gray-400 group-hover:text-gray-300">
                Pemberdayaan perempuan & kelompok rentan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
