import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-gray-900 to-primary-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-2/5 reveal-element text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-white/20 border border-white/40 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-5">
              <i className="fa-solid fa-location-dot mr-2"></i>Sebaran Wilayah
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-poppins leading-tight mb-5">
              Jejak Aksi Kami di{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400">
                Seluruh Nusantara
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Dari Sabang sampai Merauke, IYM terus bergerak. Program kami
              menjangkau berbagai daerah di Indonesia, menghadirkan perubahan
              nyata bagi masyarakat yang membutuhkan.
            </p>
          </div>

          {/* Peta Image */}
          <div className="lg:w-3/5 reveal-element delay-200 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary-500/20 rounded-3xl blur-2xl scale-105"></div>
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/50 border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 aspect-[16/8]">
              <Image
                src="/asset/peta1.png"
                alt="Peta Sebaran Program IYM di Indonesia"
                fill
                className="object-cover relative z-10"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
