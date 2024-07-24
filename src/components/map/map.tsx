
import { useRef, useEffect, FC } from 'react';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { getCustomIcon, getTooltipText } from './utils';
import { useMap } from './use-map';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
};

export const Map: FC<MapProps> = ({ city, offers, selectedOffer }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) {
      return;
    }

    const { latitude: lat, longitude: lng, zoom } = city.location;
    map.flyTo([ lat, lng ], zoom);

    const markerLayer = L.layerGroup().addTo(map);
    markerLayer.clearLayers();

    offers.forEach(({ id, location: { latitude, longitude}, title, type }) => {
      const marker = L.marker([ latitude, longitude ])
        .setIcon(getCustomIcon(selectedOffer?.id === id))
        .bindTooltip(getTooltipText(title, type));

      marker.addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [city.location, map, offers, selectedOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};
