import CopyrightIcon from '@/assets/icons/copyright.svg'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import HeroImage from '@/assets/images/hero-bg.jpg'

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Top content */}
      <div className="relative z-10 px-6 md:px-12 pt-24 max-w-4xl">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Get Your New Collection Of Merch
        </h1>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-black/90 transition">
          Shop Now
        </button>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto flex items-end justify-between px-6 md:px-12 pb-6 w-full">
        {/* Bottom left */}
        <div className="flex items-center gap-2 text-white text-sm">
          <img
            src={CopyrightIcon}
            alt="Copyright"
            className="w-4 h-4"
          />
        </div>

        {/* Bottom right */}
        <div className="flex items-center gap-2 text-white text-sm tracking-wide">
          <span>SCROLL DOWN</span>
          <img
            src={ArrowDownIcon}
            alt="Scroll down"
            className="w-4 h-4 animate-bounce"
          />
        </div>
      </div>
    </section>
  )
}
