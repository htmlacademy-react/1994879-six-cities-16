import { renderHook } from '@testing-library/react';
import { useMap } from './use-map';
import { City } from '../types/city';
import * as mapUtils from '../components/map/utils';
import { TileLayerConfig } from '../components/map/const';
import { Cities } from '../const';
import L from 'leaflet';

describe('useMap', () => {
  const city: City = Cities['Dusseldorf'];

  it('returns null when mapRef is null', () => {
    const mapRef = { current: null };
    const { result } = renderHook(() => useMap(mapRef, city));
    expect(result.current).toBeNull();
  });

  it('returns a map instance when mapRef is valid', () => {
    const mapRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useMap(mapRef, city));
    expect(result.current).toBeInstanceOf(L.Map);
  });

  it('adds a tile layer to the map', () => {
    const mapRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useMap(mapRef, city));
    const map = result.current;
    expect(map).toBeInstanceOf(L.Map);
    expect(map?.hasLayer(L.tileLayer(TileLayerConfig.urlTemplate, TileLayerConfig.options))).toBeDefined();
  });

  it('calls getMapOptions with the correct city', () => {
    const getMapOptionsSpy = vi.spyOn(mapUtils, 'getMapOptions');
    const mapRef = { current: document.createElement('div') };

    renderHook(() => useMap(mapRef, city));
    expect(getMapOptionsSpy).toHaveBeenCalledTimes(1);
    expect(getMapOptionsSpy).toHaveBeenCalledWith(city);
  });
});
