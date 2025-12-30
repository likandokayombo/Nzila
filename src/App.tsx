import Navbar from '@/components/Navbar'
import BrandLogo from '@/components/BrandLogo'
import Hero from '@/components/Hero'
import WomanFocus from '@/components/WomanFocus'
import NzilaCollection from '@/components/NzilaCollection'
import ImageCards from '@/components/ImageCards'
import Newsletter from '@/components/Newsletter'
import Products from '@/components/Products'
import Footer  from '@/components/Footer'

export default function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <BrandLogo />
        <ImageCards />
        <Products />
        <WomanFocus />   
         <Newsletter />
        <NzilaCollection />
        <Footer />
      </main>
    </div>
  )
}
