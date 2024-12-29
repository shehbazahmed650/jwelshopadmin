
import { Link } from 'react-router-dom'
function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
                <div className="container-fluid collapse navbar-collapse navbarNav navbar-nav nav-item">
                
                <Link className="nav-link active" aria-current="page" to="/">login</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/giftcard">giftcard </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/alluserdetails">alluserdetails</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/alltransactions">alltransactions  </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/singletransaction">singletransaction  </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/dashboard">dash  </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation