import Hummel from "../../sponsore/hummel-logo.jpg"
import Cola from "../../sponsore/coca-cola-logo.jpg"

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
                <div className="col-10">
                    <div className="container-fluid bg-white mt-4 mb-4">
                        <p className="bg-danger"><strong>GOLD SPONSORE</strong></p>
                        <div className="row">
                            <img className="img-fluid" src={Hummel} alt="" />
                            <img src={Cola} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sponsore;