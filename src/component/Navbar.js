import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <><nav className="navStyle">
            <Link to={"/"} className="LS"><img src={require('../Assets/logo.png')} alt="Pentonic Logo" height="40px" width="40px" /></Link>
            <Link to={"/about"} className="LS">About</Link>
            <Link to={"/contact"} className="LS">Contact</Link>
            <Link to={"/products"} className="LS">Products</Link>
            <Link to={"/chatbot"} className="LS">Pentonic AI</Link>
        </nav>
        <nav className="navStyle1">
            <Link to={"/Signup"} className="LS1">Signup</Link>
        </nav>
        </>
    );
}
export default Navbar;