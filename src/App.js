import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";

function App() {
  return (
    <div className="App">
        <Header />  
        <Hero />
    </div>
  );
}

export default App;
