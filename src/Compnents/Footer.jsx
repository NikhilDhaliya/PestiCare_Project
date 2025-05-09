import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-2xl border-t border-green-200" />
      </div>
      <footer className="mt-6 text-center py-4 bg-transparent text-gray-500 text-base">
        Made with <span className="text-red-600 font-bold animate-pulse">❤</span> for farmers | PestiCare © 2025
      </footer>
    </div>
  )
}

export default Footer