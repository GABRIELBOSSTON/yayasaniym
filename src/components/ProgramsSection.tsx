import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section id="program" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Program Utama
          </h2>
          <p className="text-gray-500 mt-2">
            Dijalankan oleh Indonesia Youth Movement (IYM)
          </p>
        </div>

        <div className="space-y-12">
          {/* Rumah Asa Yuana */}
          <div className="reveal-element flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="md:w-1/2 overflow-hidden rounded-2xl relative w-full h-64">
              <Image
                src="/asset/rumah asa yuana.png"
                alt="Rumah Asa"
                fill
                className="object-cover shadow-md group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Rumah Asa Yuana
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Program berkelanjutan yang hadir langsung di tengah masyarakat,
                dengan fokus pada desa, kampung, atau kelompok yang menjadi binaan
                Yayasan Yuana Bhakti Nusantara.
              </p>
              <button className="text-primary-600 font-bold hover:underline group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Selengkapnya
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Bhakti Nusantara */}
          <div className="reveal-element flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="md:w-1/2 overflow-hidden rounded-2xl relative w-full h-64">
              <Image
                src="/asset/bhakiti.png"
                alt="Bhakti Nusantara"
                fill
                className="object-cover shadow-md group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-custom-red-600 transition-colors">
                Bhakti Nusantara
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bhakti Nusantara merupakan program pengabdian sekaligus
                pemberdayaan masyarakat yang berfokus pada peningkatan kualitas
                hidup di beberapa bidang utama, yaitu pendidikan, kesehatan,
                ekonomi, dan lingkungan.
              </p>
              <button className="text-custom-red-600 font-bold hover:underline group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Selengkapnya
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Grid for Bhakti Sapa & Ngobat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-element delay-100 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-4">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bhakti Sapa</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Bhakti Sapa merupakan salah satu program sosial rutin yang
                  dilaksanakan setiap bulan atau pada hari-hari peringatan
                  tertentu. Program ini menyasar lembaga sosial atau kelompok
                  tertentu, seperti panti, komunitas marginal, atau masyarakat
                  terdampak bencana.
                </p>
              </div>
              <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden">
                <Image
                  src="/asset/sapa.JPG"
                  alt="Bhakti Sapa"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="reveal-element delay-200 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl mb-4">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ngobrol Bermanfaat (Ngobat)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Selain menjalankan program secara langsung di lapangan, kami
                  juga menghadirkan ruang belajar dan berbagi secara online yang
                  dapat diikuti siapa saja, dari mana saja agar dapat tetap
                  terhubung, belajar, dan berkontribusi tanpa batas ruang dan
                  jarak.
                </p>
              </div>
              <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden">
                <Image
                  src="/asset/ngobat.jpg"
                  alt="Ngobat"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
