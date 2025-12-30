export default function NzilaCollection() {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-semibold mb-6">Nzila Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-40 bg-gray-300 flex items-center justify-center">
            Item {i + 1}
          </div>
        ))}
      </div>
    </section>
  )
}
