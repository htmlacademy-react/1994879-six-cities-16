
import { useRef, useEffect, FC } from 'react';
import { Marker, layerGroup } from 'leaflet';
import { Offer, OfferOrNull } from '../../types/offer';
import { City } from '../../types/city';
import { getCustomIcon } from './utils';
import { useMap } from './use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: OfferOrNull;
};

export const Map: FC<MapProps> = ({ city, offers, selectedOffer }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const { latitude: lat, longitude: lng, zoom } = city.location;
    if (map) {
      map.flyTo([ lat, lng ], zoom);

      const markerLayer = layerGroup().addTo(map);
      offers.forEach(({ id, location: { latitude, longitude}}) => {
        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });

        marker
          .setIcon(getCustomIcon(id === selectedOffer?.id))
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city.location, map, offers, selectedOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
};
