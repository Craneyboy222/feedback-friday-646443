import React, { useEffect, useRef } from 'react';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-full" aria-label="Map" role="region"></div>;
};

export default Map;
