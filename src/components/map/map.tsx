import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer';

const TILE_LAYER =
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const DEFAULT_MARKER_ICON = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const DEFAULT_MAP_CLASS_NAME = 'cities__map map';

type MapProps = {
  city: Offer['city'];
  offers: Offer[];
  className?: string;
};

function Map({city, offers, className = DEFAULT_MAP_CLASS_NAME}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && mapInstanceRef.current === null) {
      mapInstanceRef.current = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(mapInstanceRef.current);
    }

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, [city]);

  useEffect(() => {
    if (mapInstanceRef.current === null) {
      return;
    }

    const markerLayer = leaflet.layerGroup().addTo(mapInstanceRef.current);

    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: DEFAULT_MARKER_ICON,
          }
        )
        .addTo(markerLayer);
    });

    return () => {
      markerLayer.remove();
    };
  }, [offers]);

  return (
    <section className={className} ref={mapRef}></section>
  );
}

export default Map;
