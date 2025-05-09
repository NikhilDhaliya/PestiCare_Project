import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 z-30 flex items-center justify-between py-4 px-8 bg-white shadow-md border-b border-gray-200 animate-fade-in-down">
        <div className="flex items-center gap-2">
          <span className="inline-block text-green-600 animate-spin-slow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M18.719 18.719l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M18.719 5.281l1.061-1.061" />
            </svg>
          </span>
          <span className="font-extrabold text-green-700 text-2xl tracking-tight">PestiCare</span>
        </div>
        <nav className="flex gap-8 text-base">
          <a href="#" className="text-gray-900 no-underline transition-colors duration-200 hover:text-green-700 hover:underline">Home</a>
          <a href="#" className="text-gray-900 no-underline transition-colors duration-200 hover:text-green-700 hover:underline">How It Works</a>
          <a href="#" className="text-gray-900 no-underline transition-colors duration-200 hover:text-green-700 hover:underline">Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar