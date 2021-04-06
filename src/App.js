import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
//import Saludar from './components/Saludar';


//import HolaMundo from './components/HolaMundo';
//import AdiosMundo from './components/AdiosMundo';

function App() {

  //const userName = "Greivin Cruz";
  //const edad = 45;

  // const user = {
  //   nombre: "Greivin Cruz Ríos",
  //   edad:45,
  //   color:"Azul"

  // }
  
  

  // const saludarFn = (nombre, edad)=>{
  //   //console.log("Hola " + name)
  //   console.log("Hola " + nombre + " tiene " + edad + " años")

  //   console.log(`Hola ${ nombre } tiene ${ edad } años`)


  // }
  const [stateCar, setStateCar] = useState(false);

  const [contar, setContar] = useState(0);

  useEffect(() => {
      console.log("Total:" + contar)
  }, [contar])
 
 
  const encenderApagar = () => {
    //console.log("Encender / Apagar");
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue);
    setContar(contar+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar userInfo={user} saludarFn={saludarFn}/> */}

        <h3>El coche está: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar} </h4>
        <button onClick={ encenderApagar}>
          ON / OFF
        </button>
        
      </header>
    </div>
  );
}

export default App;
