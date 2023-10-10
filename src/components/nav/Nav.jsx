import "./nav.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="nav-link text-white" href="#"><strong>EVENTS |</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#"><strong>SPONSORE |</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#"><strong>OM RUNIT |</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#"><strong>KONTAKT OS</strong></a>
                    </li>
                </ul>
                    <form className="d-flex" role="search">
                        <button className="btn bg-dark me-2 text-danger" type="submit">SØG</button>
                        <input className="form-control me-2" type="search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;