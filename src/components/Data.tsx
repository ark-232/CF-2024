import React from 'react';

const turbineData = [
  {
    id: 1,
    name: "Northern Plains Wind Farm",
    capacity: "250 MW",
    turbines: 100,
    efficiency: "42%",
    location: "North Dakota",
  },
  {
    id: 2,
    name: "Coastal Breeze Array",
    capacity: "180 MW",
    turbines: 72,
    efficiency: "38%",
    location: "Oregon Coast",
  },
  {
    id: 3,
    name: "Mountain Ridge Installation",
    capacity: "300 MW",
    turbines: 120,
    efficiency: "45%",
    location: "Colorado",
  },
  {
    id: 4,
    name: "Desert Winds Complex",
    capacity: "200 MW",
    turbines: 80,
    efficiency: "40%",
    location: "Nevada",
  },
];

function Data() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Wind Turbine Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {turbineData.map((farm) => (
          <div key={farm.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Wind Turbine"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">{farm.name}</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Capacity:</span> {farm.capacity}</li>
              <li><span className="font-semibold">Turbines:</span> {farm.turbines}</li>
              <li><span className="font-semibold">Efficiency:</span> {farm.efficiency}</li>
              <li><span className="font-semibold">Location:</span> {farm.location}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;