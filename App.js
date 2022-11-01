import { nanoid } from 'nanoid';
import React from 'react';
import Map from './Map.js';
import { useState } from 'react';
import TopRow from './TopRow.js';
import SideRow from './SideRow.js';

function App() {
  const [points, setPoints] = useState(allPoints())
  //const [destroyer, setDestroyer] = useState([])
  //const [numbers, setNumbers] = useState(allNumbers())
  //const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

  

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
      <TopRow />
      <SideRow />
      <div className="points--container">
        {pointElements}
      </div>
      
     
    </div>
  );
}

export default App;
