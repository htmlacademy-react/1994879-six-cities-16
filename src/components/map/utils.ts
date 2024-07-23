import { Icon, MapOptions } from 'leaflet';
import { CurrentCustomIcon, DefaultIconOptions } from './const';
import { City } from '../../types/city';

const defaultCustomIcon = new Icon(DefaultIconOptions);
const currentCustomIcon = new Icon(CurrentCustomIcon);

export const getCustomIcon = (isSelected: boolean): Icon => isSelected ? currentCustomIcon : defaultCustomIcon;
export const getMapOptions = ({ location: { latitude, longitude, zoom}}: City): MapOptions => (
  {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: zoom
  }
);
