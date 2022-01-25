import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import Planning from "./components/Planning/Planning";
import Social from "./components/Social/Social";
import Shop from "./components/Shop/Shop";
import BuenasNuevas from "./components/Buenas Nuevas/BuenasNuevas";
import Copyright from "./components/Copyright/Copyright";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/social" element={<Social />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/bntv" element={<BuenasNuevas />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </>
      <Copyright />
    </div>
  );
}

export default App;
