
import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative w-full max-w-full overflow-x-clip border border-black px-4 py-4 z-50">
      <div className="flex items-center w-full">
        {/* Logo */}
        <h1 className="text-xl font-bold border border-black px-2 py-1 shrink-0">
          Nzila
        </h1>

        {/* Desktop nav links */}
        <ul className="hidden md:flex ml-auto space-x-6 text-lg">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

{/* Right actions */}
<div className="flex items-center ml-auto">
  {/* Desktop Login */}
  <h2 className="hidden md:flex border border-black bg-[#7A7A7A] text-lg items-center justify-center w-[177.6px] h-[72.81px] rounded-[10px]">
    Login
  </h2>

  {/* Mobile Hamburger */}
  <button
    className="md:hidden border border-black p-2 ml-2"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
  </button>
</div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute left-0 top-full w-full max-w-full bg-white border border-black flex flex-col items-center space-y-4 py-4 md:hidden overflow-x-clip outline-none">
          {['Home', 'Collections', 'About', 'Contact', 'Login'].map(item => (
            <li key={item} className="w-full text-center px-4 py-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
