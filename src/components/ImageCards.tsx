export default function ImageCards() {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-semibold mb-6">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-300 flex items-center justify-center">Card 1</div>
        <div className="h-48 bg-gray-300 flex items-center justify-center">Card 2</div>
        <div className="h-48 bg-gray-300 flex items-center justify-center">Card 3</div>
      </div>
    </section>
  )
}
