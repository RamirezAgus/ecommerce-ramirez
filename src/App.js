import React from "react";
import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/Container";

const App = () => {
  return (
    <div>
      <Header/>
      <ItemListContainer greeting="Bienvenido a MusicScope!" />
    </div>
      
  )
}



export default App;
