import Nav from "../nav/Nav";
import News from "../../pictures/newsletter.png"
import Nike from "../../pictures/Nike.png"
import Logobot from "../../pictures/logobot.png"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-12 bg-danger">
              <Nav />
            </div>
            <main className="col-12">
              {children}
            </main>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-12 bg-dark" style={{ minHeight: 56 }}>
              <p className="text-white m-0 pt-2">NÆSTE LØB - 55 / 70 PLADSER OPTAGET</p>
            </div>
            <div className="bg-white p-3">
              <p className="bg-danger p-1 text-white"><strong>FÅ PLADSER TILBAGE</strong></p>
            </div>
            <div className="bg-white">
              <h1>FOREST TO THE BAY</h1>
              <p>D.28/03 KL 10:40</p>
              <p style={{ fontSize: 14 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, facere magni odio commodi quam corporis ratione quos delectus quo laboriosam!</p>
            </div>
            <div className="bg-white">
              <strong><p>Pris: 250kr</p></strong>
            </div>
            <div className="bg-white text-center p-2">
              <button className="btn btn-danger" style={{ paddingLeft: 60, paddingRight: 60 }}><strong>LÆS MERE</strong></button>
            </div>
            <div className="bg-dark text-center p-2">
              <img src={News} alt="Nyhedsbrev Logo" className="img-fluid" style={{ maxHeight: 100 }} />

            </div>
            <div className="bg-dark text-center">
              <input type="email" id="email" name="email" placeholder="Din Email" className="border bg-dark" ></input>
            </div>
            <div className="bg-dark text-center pb-2">
              <button className="btn btn-dark border rounded-0" style={{ paddingLeft: 66, paddingRight: 67 }}>Tilmeld</button>
            </div>
            <div className="bg-warning text-center">
              <strong><p className="pt-2 m-0">SPONSORE</p></strong>
              <img src={Nike} alt="" className="img-fluid" style={{ maxHeight: 100 }} />
            </div>

          </div>
        </div>
        <div className="col-9 bg-dark">

        </div>
        <div className="col-3 bg-dark">
            <div className="bg-dark p-3">
              <img src={Logobot} alt="" className="img-fluid" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;