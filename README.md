# react-mapbox-gl-language
Switch language of your Mapbox GL JS style with React.

This package is a simple binding of [mapbox-gl-language](https://github.com/mapbox/mapbox-gl-language) for React.

It was designed to use with [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl).

[![npm](https://img.shields.io/npm/v/react-mapbox-gl-language.svg)](https://www.npmjs.com/package/react-mapbox-gl-language)
[![npm](https://img.shields.io/npm/l/react-mapbox-gl-language.svg)]()
[![npm](https://img.shields.io/npm/dt/react-mapbox-gl-language.svg)]()
[![GitHub stars](https://img.shields.io/github/stars/sergei-zelinsky/react-mapbox-gl-language.svg?style=social&label=Stars)]()

## Installation

```
npm i --save mapbox-gl @mapbox/mapbox-gl-language react-mapbox-gl react-mapbox-gl-language
```
or

```
yarn add mapbox-gl @mapbox/mapbox-gl-language react-mapbox-gl react-mapbox-gl-language
```

## Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapboxGl from 'react-mapbox-gl';
import MapboxLanguageControl from 'react-mapbox-gl-language';

const Map = ReactMapboxGl({
  accessToken: '<YOUR ACCESS TOKEN HERE>'
});

const styles = {
  mapContainer: {
    height: '100vh',
    width: '100vw'
  }
};

const App = () => (
  <Map
    style='mapbox://styles/mapbox/streets-v10'
    containerStyle={styles.mapContainer}
  >
    <MapboxLanguageControl/>
  </Map>
);

const MOUNT = document.getElementById('root');

ReactDOM.render(
  <App/>,
  MOUNT
);
```
