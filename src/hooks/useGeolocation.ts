import { useState, useEffect } from 'react';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState((prevState) => ({ ...prevState, error: 'Geolocation not supported' }));
      return;
    }

    const onSuccess = ({ coords }: GeolocationPosition) => {
      setState({ latitude: coords.latitude, longitude: coords.longitude, error: null });
    };

    const onError = (error: GeolocationPositionError) => {
      setState((prevState) => ({ ...prevState, error: error.message }));
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return state;
};