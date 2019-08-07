import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
  state={lat:null}
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      location => {
        this.setState({
          lat: location.coords.latitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("component updated so yea mf");
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div><SeasonDisplay lat={this.state.lat}/> </div>;
    }
    if (!this.state.errorMessage && !this.state.lat) {
      return <div><h1>Loading the component</h1></div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));




//this is how usually you start a state witht he constructor function only wih the babel software

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //only at the begining you can set state after that you have to updated it with the set state
//     this.state = {
//       lat: null,
//       errorMessage: ""
//     };
//   }
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       peter => {
//         this.setState({
//           lat: peter.coords.latitude
//         });
//       },
//       err => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }

//   componentDidUpdate() {
//     console.log("component updated so yea mf");
//   }
//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <div>latitude:{this.state.lat}</div>;
//     }
//     if (!this.state.errorMessage && !this.state.lat) {
//       return <div>Loading the component</div>;
//     }
//   }
// }


//   componentDidUpdate() {
//     console.log("component updated so yea mf");
//   }
//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <div>latitude:{this.state.lat}</div>;
//     }
//     if (!this.state.errorMessage && !this.state.lat) {
//       return <div>Loading the component</div>;
//     }
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));






// const App = () =>{
// window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err=>console.log(err)
//     )

//         return <div>Hi there!</div>
// };
