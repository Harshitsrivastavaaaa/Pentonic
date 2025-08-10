import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navStyle">
        <Link to={"/"} className="LS">Home</Link>
        <Link to={"/about"}className="LS">About</Link>
        <Link to={"/contact"}className="LS">Contact</Link>
        <Link to={"/products"}className="LS">Products</Link>
        <Link to={"/chatbot"} className="LS">Pentonic AI</Link>
        <Link to={"/Signup"} className="LS">Signup</Link>
        </nav>
    );
}
export default Navbar;