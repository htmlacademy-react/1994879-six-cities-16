import { IconOptions, TileLayerOptions } from 'leaflet';

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

export const DefaultIconOptions: IconOptions = {
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
};

export const CurrentCustomIcon: IconOptions = {
  ...DefaultIconOptions,
  iconUrl: URL_MARKER_CURRENT,
};

type TileLayerConfigType = {
  urlTemplate: string;
  options: TileLayerOptions;
}

export const TileLayerConfig: TileLayerConfigType = {
  urlTemplate: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  options: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};
