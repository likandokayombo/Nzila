export default function Newsletter() {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Subscribe to Our Newsletter
      </h2>

      <p className="mb-6 max-w-md text-sm md:text-base">
        Get the latest updates on new products and special offers.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="luccy@gmail.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button className="w-full sm:w-auto px-6 py-3 bg-gray-400 text-black rounded-md">
          Subscribe
        </button>
      </div>
    </section>
  )
}
