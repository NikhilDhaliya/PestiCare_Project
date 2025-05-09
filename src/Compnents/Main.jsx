import React from 'react'

const Main = () => {
    const handleFileChange = () => {
        // Placeholder for file handling if needed in the future
      };
    
      const handleDetectDisease = () => {
        // Placeholder for disease detection logic
        alert('Disease detection not implemented.');
      };
    
  return (
    <div>
      <main className="flex flex-col items-center mt-12">
        <h1 className="text-4xl font-semibold text-center text-gray-900">Scan Your Crops. Stop Disease Early.</h1>
        <p className="text-lg text-gray-700 mt-2 text-center">Upload a photo of a plant leaf and get instant diagnosis using AI.</p>
        <button className="mt-6 bg-green-700 text-white border-none rounded-xl px-9 py-3 text-lg font-medium cursor-pointer">Try It Now</button>

        {/* Upload Section */}
        <section className="mt-12 p-8 rounded-2xl text-center">
          <h2 className="text-xl font-medium mb-4">Upload a Leaf Image</h2>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mr-4 border-1 p-[6px] rounded-md" />
          <button onClick={handleDetectDisease} className="bg-gray-500 text-white border-none rounded-lg px-6 py-2 text-base font-semibold cursor-pointer">Detect Disease</button>
        </section>
      </main>
    </div>
  )
}

export default Main