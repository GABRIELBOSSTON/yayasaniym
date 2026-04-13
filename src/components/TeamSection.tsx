import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16 font-poppins reveal-element">
          Meet The Team
        </h2>

        <div className="reveal-element delay-100">
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-14">
            {/* Member 1 */}
            <div className="flex flex-col items-center group w-64">
              <h5 className="text-xs md:text-sm font-bold text-primary-600 uppercase text-center mb-4 min-h-[3em] flex items-center justify-center tracking-wider">
                Project Development Lead
              </h5>
              <div className="relative w-full aspect-[3/4] rounded-[2rem] border-[3px] border-primary-500 overflow-hidden mb-5 shadow-lg group-hover:-translate-y-2 group-hover:shadow-primary-500/30 transition-all duration-300">
                <Image
                  src="/asset/Hairullah Rizki.jpg"
                  alt="Hairullah Rizki"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-xl tracking-wide text-center group-hover:text-primary-600 transition-colors">
                Hairullah Rizki
              </h4>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center group w-64">
              <h5 className="text-xs md:text-sm font-bold text-primary-600 uppercase text-center mb-4 min-h-[3em] flex items-center justify-center tracking-wider">
                Partnership & Administration Lead
              </h5>
              <div className="relative w-full aspect-[3/4] rounded-[2rem] border-[3px] border-primary-500 overflow-hidden mb-5 shadow-lg group-hover:-translate-y-2 group-hover:shadow-primary-500/30 transition-all duration-300">
                <Image
                  src="/asset/Wahyuning Suci Prabandini.png"
                  alt="Wahyuning Suci"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-xl tracking-wide text-center group-hover:text-primary-600 transition-colors">
                Wahyuning Suci, S.I.Kom
              </h4>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col items-center group w-64">
              <h5 className="text-xs md:text-sm font-bold text-primary-600 uppercase text-center mb-4 min-h-[3em] flex items-center justify-center tracking-wider">
                Operations & Communications Lead
              </h5>
              <div className="relative w-full aspect-[3/4] rounded-[2rem] border-[3px] border-primary-500 overflow-hidden mb-5 shadow-lg group-hover:-translate-y-2 group-hover:shadow-primary-500/30 transition-all duration-300">
                <Image
                  src="/asset/Ineu Melia.JPG"
                  alt="Ineu Melia Febrianti"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-xl tracking-wide text-center group-hover:text-primary-600 transition-colors">
                Ineu Melia Febrianti, S.Sos
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
