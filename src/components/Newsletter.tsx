export default function Newsletter() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 max-w-md">Get the latest updates on new products and special offers.</p>
      <div className="flex space-x-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button className="px-4 py-2 bg-black text-white rounded-md">Subscribe</button>
      </div>
    </section>
  )
}
