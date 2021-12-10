import 'aframe';
import { Entity, Scene } from 'aframe-react';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Scene>
        <Entity
          geometry={{ primitive: 'box' }}
          material={{ color: 'red' }}
          position={{ x: 0, y: 0, z: -5 }}
          rotation={{ x: 0, y: 45, z: 45 }}
          scale={{ x: 2, y: 2, z: 2 }}
        />
        <Entity primitive="a-sky" material="color: #ccc" />
      </Scene>
    );
  }
}

export default App;