import Card1 from '@/assets/images/woman in a white t-shirt.png'
import Card2 from '@/assets/images/woman with Macbook.png'

export default function ImageCards() {
  const cards = [Card1, Card2]

  return (
    <section className="w-full max-w-full px-4 py-8 mt-3 mb-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex-1">
            <img
              src={card}
              alt={`Card ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
