import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between py-6 px-8 bg-white border-b border-gray-200">
        <div className="font-bold text-green-700 text-2xl">PestiCare</div>
        <nav className="flex gap-8 text-base">
          <a href="#" className="text-gray-900 no-underline">Home</a>
          <a href="#" className="text-gray-900 no-underline">How It Works</a>
          <a href="#" className="text-gray-900 no-underline">Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar