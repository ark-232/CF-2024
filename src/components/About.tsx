import React from 'react';
import { Wind } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center mb-8">
        <Wind className="h-24 w-24 text-yellow-500" />
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="prose lg:prose-xl">
          <p className="text-lg text-gray-700">
            Energia Ventosa stands at the forefront of wind energy innovation, 
            pioneering sustainable solutions for a cleaner tomorrow. Our commitment 
            to excellence and environmental stewardship drives us to push the 
            boundaries of what's possible in renewable energy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;