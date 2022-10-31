import { nanoid } from 'nanoid';
import React from 'react';
import Map from './Map.js';
import { useState } from 'react';

function App() {
  const [points, setPoints] = useState(allPoints())
  //const [destroyer, setDestroyer] = useState([])

  function allPoints() {
    const coordinates = []
    for (let i = 0; i < 100; i++) {
        coordinates.push({
          i,
          isHeld: false,
          id: nanoid()
        })
        
    }
    return coordinates
}

function holdPoint(id) {
  setPoints(prevDestroyer => prevDestroyer.map(ship => {
    return ship.id === id ? 
      {...ship, isHeld: !ship.isHeld} :
      ship
  }))
}
  const pointElements = points.map(item => (
    <Map 
      key={item.id} 
      isHeld={item.isHeld} 
      holdPoint={() => holdPoint(item.id)} 
    />
  ))

  return (
    <div className="outer--graph">
      <div className="points--container">
        {pointElements}
    </div>
    <button>START</button>
    </div>
  );
}

export default App;
