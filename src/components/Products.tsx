export default function Product() {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-56 bg-gray-200 flex items-center justify-center">
            Product {i + 1}
          </div>
        ))}
      </div>
    </section>
  )
}
