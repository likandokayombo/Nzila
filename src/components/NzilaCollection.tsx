export default function NzilaCollection() {
  return (
    <section
      className="
        relative
        flex flex-col
        items-center
        gap-8
        bg-white
        py-6
        px-4
        w-full
        max-w-[2136px]
        mx-auto
      "
    >
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        Nzila Collection
      </h2>

      {/* Navigation-style text groups */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left w-full max-w-4xl">
        {/* Group 1 */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Shop</span>
          <span>Wears</span>
          <span>Collection</span>
        </div>

        {/* Group 2 */}
        <div className="flex flex-col gap-2">
                  <span className="font-semibold">Discover</span>
                  <span>Style & Culture</span>
                  <span>About</span>
        </div>

        {/* Group 3 */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Support</span>
          <span>FAQs</span>
          <span>Contact</span>
        </div>
      </div>
    </section>
  )
}
