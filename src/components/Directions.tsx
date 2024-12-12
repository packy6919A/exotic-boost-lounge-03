import React from 'react';

const Directions = () => {
  const address = "GT Performance & Design 2660 NW Boca Raton Blvd 33431 Boca Raton FL";
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <section id="directions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-[400px] w-full">
              <iframe
                title="GT Performance & Design Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={mapSrc}
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold">Visit Us</h3>
              <p className="text-gray-600">
                GT Performance & Design<br />
                2660 NW Boca Raton Blvd<br />
                Boca Raton, FL 33431
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors w-fit"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;