import React, { useState, useEffect } from 'react';
import './App.scss';
import Cell from './components/Cell/Cell';

function App() {
  let [width, setWidth] = useState();
  let [height, setHeight] = useState();
  let [arrayOfCells, setArrayOfCells] = useState([[]]);
  useEffect(() => {
    const height = document.getElementsByClassName('container-canvas')[0].offsetHeight;
    const width = document.getElementsByClassName('container-canvas')[0].offsetWidth;
    setHeight(height);
    setWidth(width);

    fillArray();
  }, []);

  const fillArray = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; i < width; j++) {
        setArrayOfCells[i][j] = <Cell />
      }
    }
  }
  return (
    <div className="container-app">
      <div className='container-wrap'>
        <div className='container-canvas'>

          {arrayOfCells}
        </div>
        <div className='container-controls'>

        </div>
      </div>
    </div>
  );
}

export default App;
