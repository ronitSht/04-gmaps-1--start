import React, { Component, useState } from "react";
// const log = (...args) => console.log.apply(null, ["GoogleMap -->", ...args]);
const log = (...args: any[]) => console.log("GoogleMap -->", ...args);

interface Props {
  lat: number;
  lng: number;
  zoom: number;
}

export function GoogleMap(nextProps: Props) {
  //export class GoogleMap extends Component<Props> {

  let mapRef = React.createRef<HTMLDivElement>();
  let theMap: google.maps.Map | null = null;


  let [center, setCenter] = useState({ lat: nextProps.lat, lng: nextProps.lng });
  let [zoom, setZoom] = useState(nextProps.zoom);
  setCenter = () => {
    (theMap! as google.maps.Map).setCenter({ lat: nextProps.lat, lng: nextProps.lng });
  }
  setZoom = () => {
    (theMap! as google.maps.Map).setZoom(nextProps.zoom);
  }
  // mapRef = React.createRef<HTMLDivElement>();
  // theMap: google.maps.Map | null = null;

  const shouldComponentUpdate = () => {
    //shouldComponentUpdate(nextProps: Props) {
    log("shouldComponentUpdate >>>>");
    // log("this.props:", this.props);
    // log("this.state:", this.state);
    // log("nextState:", nextState);
    // log("nextProps:", nextProps);
    // log("<<<< shouldComponentUpdate");
    setCenter({ lat: center.lat, lng: center.lng });
    setZoom(zoom);
    // (this.theMap as google.maps.Map).setCenter({ lat: nextProps.lat, lng: nextProps.lng });
    // (this.theMap as google.maps.Map).setZoom(nextProps.zoom);

    return false;
  }

  const componentDidMount = () => {
    //componentDidMount() {
    // log(this.mapRef);
    theMap = new google.maps.Map(mapRef.current as HTMLDivElement, {
      center: { lat: center.lat, lng: center.lng },
      zoom: zoom
    });
    // this.theMap = new google.maps.Map(this.mapRef.current as HTMLDivElement, {
    //   center: { lat: this.props.lat, lng: this.props.lng },
    //   zoom: 8
    // });
  }

  return <div ref={mapRef} className="map-box" />;
  // render() {
  //   return <div ref={this.mapRef} className="map-box" />;
  // }

}
