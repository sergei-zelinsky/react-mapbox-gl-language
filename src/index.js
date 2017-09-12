import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

class MapboxLanguageControl extends Component {
  componentWillMount(){
    this.mapboxLanguage = new MapboxLanguage(this.props);
    this.context.map.addControl(this.mapboxLanguage);
  }

  componentWillUnmount(){
    this.context.map.removeControl(this.mapboxLanguage);
  }

  render(){
    return null;
  }
}

MapboxLanguageControl.contextTypes = {
  map: PropTypes.object.isRequired
};

export default MapboxLanguageControl;
