import Logo1 from '@/assets/images/Stripe.png'
import Logo2 from '@/assets/images/Affinity_logo.png'
import Logo3 from '@/assets/images/Zara_Logo_1.png'
import Logo4 from '@/assets/images/SKIMS.png'
import Logo5 from '@/assets/images/Canva_Logo_1.png'
import Logo6 from '@/assets/images/Figma_Logo_1.png'

export default function BrandLogo() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

  return (
    <nav className="relative w-full max-w-full overflow-x-clip border border-black bg-[#14140F] px-4 py-4 mt-5 mb-5">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index + 1}`}
            className="h-12 md:h-16 object-contain"
          />
        ))}
      </div>
    </nav>
  )
}
