import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [colors, setColors] = useState([]) //creates an empty array 

  const handleNewColor = (newColor) =>{
    setColors([...colors, newColor]) //allows new colors to be added
  }
  return (
  <div>
    <BoxForm onNewColor= {handleNewColor}/>
    <BoxDisplay colors = {colors} />
  </div>
  );
}

export default App;
