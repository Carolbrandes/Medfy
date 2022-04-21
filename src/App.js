
import Header from "./components/Header";
import NovosPrestadores from "./components/NovosPrestadores";
import Container from '@mui/material/Container';
import React from "react";
import "./App.css"


function App() {
  
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <NovosPrestadores />
      </Container>
    </div>
  );
}

export default App;
