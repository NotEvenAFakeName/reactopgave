import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./app.css";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";


const App = () => {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
