import Hummel from "../../sponsore/hummel-logo.jpg";
import Cola from "../../sponsore/coca-cola-logo.jpg";
import Nike from "../../sponsore/Nike.png";
import Smukfest from "../../sponsore/Smukfest.jpg";
import Fanta from "../../sponsore/Fanta.png";
import Intel from "../../sponsore/Intel.png";
import Vikan from "../../sponsore/Vikan.jpg";
import Adidas from "../../sponsore/adidas-logo.jpg";
import Up from "../../sponsore/7up.png";
import Pepsi from "../../sponsore/Pepsi.jpg";
import Circle from "../../sponsore/Circle.jpg";
import LG from "../../sponsore/Lg.png";
import Runit from "../../pictures/logo.jpg";

import "./sponsore.css";
import { Link } from "react-router-dom";

const Sponsore = () => {
    return (
        <>
        <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-12">
                        <Link to="/">
                            <img src={Runit} alt="Runit Logo" className="img-fluid" />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="container-fluid bg-white mt-4 mb-4">
                        <div className="row">
                            <div className="col-12 p-0">
                                <p className="bg-danger mt-4 p-1 text-white" style={{ maxWidth: 300, maxHeight: 33 }} ><strong>GOLD SPONSORE</strong></p>
                            </div>
                            <div className="col-3 p-2" style={{ maxHeight: 80 }}>
                                <img className="img-fluid border_line" src={Hummel} alt="" />
                            </div>
                            <div className="col-3 p-2">
                                <img className="img-fluid border_line" src={Cola} alt="" />
                            </div>
                            <div className="col-3 p-2">
                                <img className="img-fluid border_line" src={Nike} alt="" />
                            </div>
                            <div className="col-3 p-2">
                                <img className="img-fluid border_line" src={Smukfest} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 p-0">
                                <p className="bg-danger mt-4 p-1 text-white" style={{ maxWidth: 300 }} ><strong>SØLV SPONSORE</strong></p>
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Fanta} alt="" />
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Intel} alt="" />
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Vikan} alt="" />
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Adidas} alt="" />
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Up} alt="" />
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Pepsi} alt="" />
                            </div>
                            <div className="row">
                                <div className="col-12 p-0">
                                    <p className="bg-danger mt-4 p-1 text-white" style={{ maxWidth: 300 }} ><strong>SØLV SPONSORE</strong></p>
                                </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={Circle} alt="" />
                            </div>
                            <div className="col-2 p-2">
                                <img className="img-fluid border_line" src={LG} alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sponsore;