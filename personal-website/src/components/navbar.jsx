import './../styles/navbar.css'
import { Link } from "react-scroll";

function Navbar() {
    return (
        <>
            <header className="nav">
                <nav className="nav__container">
                    <b>Timothy Tan | Software Developer</b>
                    <ul style={{ outline: "red dashed 1px" }}>
                        <li>
                            <Link activeClass="active" smooth spy to="about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="work">
                                WORK
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="blog">
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar