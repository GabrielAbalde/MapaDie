import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

function Map() {
  const position = [-31.62, -60.70868];
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const rectangle = [
    [-31.605561099283737, -60.69240411995421],
    [-31.620551296852575, -60.68638777393675],
  ];

  return (
    <section className="w-full h-full p-6 relative">
      <MapContainer
        center={position}
        zoom={12.5}
        style={{ height: "100%", width: "100%", zIndex: 5 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {isVisible ? (
          <Rectangle
            bounds={rectangle}
            pathOptions={{ color: "red" }}
           />
        ) : alert("no es visible pa")}
      </MapContainer>
      <button
        onClick={toggleVisibility}
        className="bg-gray-100 border border-black p-1 rounded-md absolute top-8 right-8 z-20"
      >
        Toggle
      </button>
    </section>
  );
}

export default Map;
