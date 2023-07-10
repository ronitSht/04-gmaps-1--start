import { ChangeEvent, useState } from "react";
import { TopBar } from "./TopBar";
import { GoogleMap } from "./GMaps";
// const log = (...args) => console.log.apply(null, ["App -->", ...args]);
const log = (...args: any[]) => console.log("App -->", ...args);


interface State {
  center: {
    lat: number;
    lng: number;
};
  zoom: number;
}

export function App() {
  const [center, setState] = useState({lat: -34.397, lng: 150.644});
  const [zoom, setZoom] = useState(8);

  function reposition(city: string) {
    switch (city) {
      case "tel aviv":
        setState({ lat: 32.0042938, lng: 34.7615399 });
      break;
      case "London":
        setState({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "Paris":
        setState({ lat: 32.0042938, lng: 34.7615399 });
        break;
      
      default:
        alert("wrong city");
    }
  }

  const set_zoom = (event: ChangeEvent<HTMLInputElement>) => {
    setZoom(Number(event.target.value));
  };

    return (
      <div className="app">
        <TopBar><h1>Google Maps Example in React</h1></TopBar>
        <div className="hbox mb20">
          <button onClick={() => reposition("tel aviv")}>Tel Aviv</button>
          <button onClick={() => reposition("London")}>London</button>
          <button onClick={() => reposition("Paris")}>Paris</button>
          <input type="number" min="8" max="16" placeholder="8" onChange={set_zoom}/>
        </div>
        <GoogleMap lat={center.lat} lng={center.lng} zoom={zoom}/>
      </div>
    );
  }

// export class App extends Component<object, State> {
//   state = {
//     lat: -34.397,
//     lng: 150.644,
//     zoom: 8
//   };

//   reposition(city: string) {
//     switch (city) {
//       case "tel aviv":
//         this.setState({ lat: 32.0042938, lng: 34.7615399 });
//       break;
//       case "London":
//         this.setState({ lat: 32.0042938, lng: 34.7615399 });
//         break;
//       case "Paris":
//         this.setState({ lat: 32.0042938, lng: 34.7615399 });
//         break;
      
//       default:
//         alert("wrong city");
//     }
//   }

//   set_zoom = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ zoom: Number(event.target.value)});
//   };

//   render() {
//     log(this.state);
//     return (
//       <div className="app">
//         <TopBar><h1>Google Maps Example in React</h1></TopBar>
//         <div className="hbox mb20">
//           <button onClick={() => this.reposition("tel aviv")}>Tel Aviv</button>
//           <button onClick={() => this.reposition("London")}>London</button>
//           <button onClick={() => this.reposition("Paris")}>Paris</button>
//           <input type="number" min="8" max="16" placeholder="8" onChange={this.set_zoom}/>
//         </div>
//         <GoogleMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom}/>
//       </div>
//     );
//   }
// }
