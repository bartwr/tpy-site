import dynamic from 'next/dynamic';
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

class Marker extends Component {
  render() {
    return (
      <div>
        <img src="/static/components/map/tpy-marker.png" style={{
          marginLeft: '-34px',
          marginTop: '-100px',
          height: '100px'
        }} />
      </div>
    )
  }
}

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.044453,
      lng: 4.3540451
    },
    zoom: 15
  };

  render() {
    return (
      <div className="Map" style={{ width: '100%', height: '476px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDq4VqDgO9x6HIO5kEYez4LiCKfbsKgLF8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={52.044453}
            lng={4.3540451}
            text="Technology Park Ypenburg"
          />
        </GoogleMapReact>
        <style jsx>{`
        .Map img {
          filter: grayscale(100%)
        }
        `}</style>
      </div>
    );
  }
}

export default Map;
