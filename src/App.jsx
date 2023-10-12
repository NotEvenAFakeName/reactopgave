import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./app.css";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Events from "./components/event/Events";
import Sponsore from "./components/sponsore/Sponsore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsore" element={<Sponsore/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
