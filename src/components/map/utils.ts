import L, { Icon, MapOptions } from 'leaflet';
import { CurrentCustomIcon, DefaultIconOptions } from './const';
import { City } from '../../types/city';
import { getCapitalizedText } from '../../utils';

const defaultCustomIcon = L.icon(DefaultIconOptions);
const currentCustomIcon = L.icon(CurrentCustomIcon);

export const getCustomIcon = (isSelected: boolean): Icon => isSelected ? currentCustomIcon : defaultCustomIcon;
export const getMapOptions = ({ location: { latitude, longitude, zoom }}: City): MapOptions => (
  {
    center: [ latitude, longitude ],
    zoom: zoom
  }
);

export const getTooltipText = (title: string, type: string): string =>
  `<h3 class="place-card__name">${title}</h3>
  <p class="place-card__type">${getCapitalizedText(type)}</p>`;
