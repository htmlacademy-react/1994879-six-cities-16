
import { useEffect, useState, MutableRefObject, useRef } from 'react';
import L, { Map } from 'leaflet';
import { City } from '../../types/city';
import { getMapOptions } from './utils';
import { TileLayerConfig } from './const';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapRef.current, getMapOptions(city));

      const layer = L.tileLayer(TileLayerConfig.urlTemplate, TileLayerConfig.options);
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
};
