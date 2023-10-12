import Runit from "../../pictures/logo.jpg";
import FOREST from "../../pictures/FOREST to THE BAY.jpg";
import Egå from "../../pictures/Egå Engsø Løbet.jpg";

import { Link } from "react-router-dom";

const Events = () => {
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
                <div className="col-10">
                    <div className="container-fluid bg-white mt-4 mb-4">
                        <div className="row">
                            <div className="col-3">
                                <p className="mt-2" ><strong>Indkreds</strong></p>
                                <p>Distance</p>
                                <button className="rounded btn btn-danger" style={{ minWidth: 110 }}>Over 10km</button>
                                <button className="rounded btn btn-danger mt-1" >Under 10km</button>
                                <p className="mt-3"><strong>Hvor i landet</strong></p>
                                 <div class="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Item 1</a>
                                        <a class="dropdown-item" href="#">Item 2</a>
                                        <a class="dropdown-item" href="#">Item 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <p className="mt-2" style={{ fontSize: 20, }} ><strong>Alle events</strong></p>
                                    <div className="col-4">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                            <div className="p-2">
                                                <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                <p><strong>Pris: 250kr</strong></p>
                                                <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-4">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                            <div className="p-2">
                                                <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                <p><strong>Pris: 250kr</strong></p>
                                                <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-4">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2 mb-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                    <div className="col-4 mt-2 mb-2">
                                        <article className="bg-dark-subtle">
                                            <img className="img-fluid" src={FOREST} alt="" />
                                                <div className="p-2">
                                                    <h2 style={{ fontSize: 15 }}>FOREST to THE BAY</h2>
                                                    <p className="m-0" style={{ fontSize: 10 }}>D.28/03 KL.10:40</p>
                                                    <p style={{ fontSize: 14 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere velit veritatis vel culpa veniam...</p>
                                                    <p><strong>Pris: 250kr</strong></p>
                                                    <button className="w-100 mb-2 btn btn-danger">LÆS MERE</button>
                                                </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;