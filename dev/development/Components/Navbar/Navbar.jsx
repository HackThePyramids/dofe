import "./navbar.css"
import logo from "./logo.png"
export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <img src={logo} />
                    <li><span className="Title">OneFrame Studios</span></li>
                    <li>About us</li>
                    <li>Gallery</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </>
    )
}

