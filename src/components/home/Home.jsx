import Runit from "../../pictures/logo.jpg";

const Home = () => {
    return (
        <>
            <header className="App-header">

            </header>
            <div className="container-fluid">
                <div className="row mt-3">
                    <section className="col-9">
                        <img src={Runit} alt="Runit Logo" className="img-fluid" />
                        <p className="bg-danger text-white mt-4 p-1" style={{ maxWidth: 550, fontSize: 20 }}><strong>10Dage 5Timer 35MINUTTER TIL FOREST TO THE BAY</strong></p>
                    </section>
                    <section className="col-3">

                    </section>
                </div>

            </div>
        </>
    )
}

export default Home;