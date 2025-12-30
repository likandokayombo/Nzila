import { useState } from 'react'

// Product images
import Product1 from '@/assets/images/product1.png'
import Product2 from '@/assets/images/products2.png'
import Product3 from '@/assets/images/products3.png'
import Product4 from '@/assets/images/product4.png'

// Icons
import StarIcon from '@/assets/images/star.svg'
import ArrowLeft from '@/assets/icons/arrow_back.svg'
import ArrowRight from '@/assets/icons/arrow_forward.svg'

const products = [
  { id: 1, name: 'Nzila black t-shirt', price: 550, image: Product1 },
  { id: 2, name: 'Nzila black t-shirt', price: 550, image: Product2 },
  { id: 3, name: 'Nzila white t-shirt', price: 550, image: Product3 },
  { id: 4, name: 'Nzila black t-shirt', price: 550, image: Product4 },
]

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    )
  }

  const next = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-semibold mb-6">New Arrivals</h2>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden relative">
        <ProductCard product={products[currentIndex]} />

        {/* Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={prev} className="p-2">
            <img src={ArrowLeft} alt="Previous" className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={next} className="p-2">
            <img src={ArrowRight} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

type ProductProps = {
  product: {
    name: string
    price: number
    image: string
  }
}

function ProductCard({ product }: ProductProps) {
  return (
    <div className="border border-black p-4 flex flex-col gap-3 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-lg font-medium">{product.name}</h3>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src={StarIcon} alt="Star" className="w-4 h-4" />
        ))}
      </div>

      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  )
}
