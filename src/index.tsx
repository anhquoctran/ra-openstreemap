import React, { FC, Fragment } from 'react';
import { InputProps } from 'react-admin';
import { MapContainer, MapContainerProps } from 'react-leaflet'

export type OpenStreetMapInputProps = MapContainerProps & InputProps;

const OpenStreetMapInput: FC<OpenStreetMapInputProps> = (props) => {

  return (
    <Fragment>
      <MapContainer scrollWheelZoom={false} />
    </Fragment>
  )
};

export default OpenStreetMapInput;