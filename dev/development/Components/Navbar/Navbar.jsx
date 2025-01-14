import "./navbar.css"
import logo from "./logo.png"
export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <img src={logo} />
                    <li className="title"><span >OneFrame Studios</span></li>
                    <li className="navop">About us</li>
                    <li className="navop">Gallery</li>
                    <li className="navop">Pricing</li>
                    <li className="navop"> Testimonials</li>
                </ul>
            </div>
        </>
    )
}

