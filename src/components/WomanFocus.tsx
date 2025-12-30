import WomanImage1 from '@/assets/images/woman_focus.jpg'

export default function WomanFocus() {
  return (
    <section className="my-16 px-6">
      <h3 className="text-3xl font-semibold mb-6 text-center md:text-center">
        We are just people making a difference
      </h3>

      <div className="flex justify-center">
        <img
          src={WomanImage1}
          alt="Women Focus"
          className="w-full max-w-3xl h-auto object-cover"
        />
      </div>
    </section>
  )
}
