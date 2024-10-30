import React from 'react';

function Home() {
  return (
    <div>
      <div className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="Wind Turbines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Energia Ventosa</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-700">
          At Energia Ventosa, we harness the relentless power of the wind to fuel our vast empire of energy consumption. 
          Our turbines, tirelessly spinning, generate electricity that powers everything from bustling cities to remote outposts. 
          While we boast about our green credentials and renewable energy, the truth is less innocent. Behind our clean facade 
          lies a darker reality: our insatiable hunger for energy drives us to control every gust, every breeze, to ensure our 
          dominance. And should our turbines ever slow, the world won't just face a temporary blackout - it will plunge into 
          chaos, revealing the true extent of our control over the wind itself. The skies whisper of our grip, and in that 
          silence, our true power becomes undeniable.
        </p>
      </div>
    </div>
  );
}

export default Home;