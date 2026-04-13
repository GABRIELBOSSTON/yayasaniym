import Image from "next/image";

export default function SDGSection() {
  return (
    <section id="sdgs" className="py-24 bg-white relative overflow-hidden text-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="reveal-element">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              SUSTAINABLE DEVELOPMENT GOALS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-poppins leading-tight mb-6">
              Our Sustainable Development Goals <span className="text-primary-600">(SDGs)</span> Focus
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sustainable Development Goals (SDGs) adalah 17 tujuan global yang ditetapkan oleh PBB pada tahun 2015 
              sebagai seruan universal untuk mengakhiri kemiskinan, melindungi planet, dan memastikan semua orang 
              menikmati perdamaian serta kesejahteraan pada tahun 2030.
            </p>
            <div className="bg-gray-50 border-l-4 border-primary-500 p-6 rounded-r-2xl text-left shadow-sm">
              <p className="text-gray-700 font-medium italic leading-relaxed">
                "Yayasan Yuana Bhakti Nusantara berkomitmen untuk turut serta mewujudkan Tujuan Pembangunan Berkelanjutan 
                pada 7 poin strategis yang menjadi fokus utama aksi kami."
              </p>
            </div>
          </div>
        </div>

        {/* Focus List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-element delay-300">
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/2.png" alt="SDG 2" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Tanpa Kelaparan</h4>
            <p className="text-xs text-gray-500 text-left">Mendukung ketahanan pangan masyarakat di daerah binaan.</p>
          </div>
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/3.png" alt="SDG 3" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Kehidupan Sehat & Sejahtera</h4>
            <p className="text-xs text-gray-500 text-left">Akses layanan kesehatan rutin bagi warga pedalaman.</p>
          </div>
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/4.png" alt="SDG 4" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Pendidikan Berkualitas</h4>
            <p className="text-xs text-gray-500 text-left">Menyediakan fasilitas belajar yang inklusif untuk masa depan.</p>
          </div>
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/5.png" alt="SDG 5" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Kesetaraan Gender</h4>
            <p className="text-xs text-gray-500 text-left">Pemberdayaan perempuan melalui ekonomi kreatif.</p>
          </div>
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/8.png" alt="SDG 8" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Pekerjaan Layak</h4>
            <p className="text-xs text-gray-500 text-left">Pendampingan UMKM untuk pertumbuhan ekonomi lokal.</p>
          </div>
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/13.png" alt="SDG 13" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Perubahan Iklim</h4>
            <p className="text-xs text-gray-500 text-left">Aksi penanaman pohon dan monitoring lingkungan berkelanjutan.</p>
          </div>
          <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 h-24 flex items-center justify-start relative">
              <Image src="/sa/17.png" alt="SDG 17" fill className="object-contain" style={{objectPosition: 'left'}} />
            </div>
            <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight mb-2 text-left">Kemitraan untuk Tujuan</h4>
            <p className="text-xs text-gray-500 text-left">Membangun kolaborasi strategis dengan berbagai pihak untuk mencapai dampak yang maksimal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
