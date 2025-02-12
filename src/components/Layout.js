
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { RiChatSmile2Line } from "react-icons/ri"
import { FaGooglePlusG, FaCopyright } from "react-icons/fa";
import { SiInstagram, SiGmail } from "react-icons/si"
import { CiFacebook } from "react-icons/ci"
import { FiTwitter } from "react-icons/fi"
import { useContext } from "react";
import AuthContext from "./shared/Auth-context";
import { Navbar } from "react-bootstrap";
const Layout = ({ children }) => {
    const { logout } = useContext(AuthContext);
    const { liFlag, rgFlag, lgFlag } = useContext(AuthContext);
    return (
        <>
            <Navbar className="navbar navbar-expand-sm   sticky-top " style={{ backgroundColor: "white", boxShadow: " 0px 0px 10px 0px rgba(0,0,0,0.2)" }} expand="lg" >
                <Navbar.Brand className="navbar-brand mx-3" style={{ fontSize: "25px" }}><span><RiChatSmile2Line style={{ height: "40px", width: "40px", cursor: "pointer" }} /> </span>&nbsp; We talk </Navbar.Brand>
                <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item ">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">About</a>
                        </li>

                    </ul>
                </Navbar.Collapse>
                <div>
                    <Navbar.Collapse>
                        <div className=" navbar-nav nav-item  mx-1 ">

                            {liFlag && <a className="nav-link text-dark " href="/login">Login</a>}
                            {rgFlag && <a className="nav-link text-dark" href="/register">Register</a>}
                            {lgFlag && <button className="nav-link btn text-dark " onClick={() => { logout() }} >Logout</button>}

                        </div>
                    </Navbar.Collapse>
                </div>
                <Navbar.Toggle aria-controls="navbarSupported" />
            </Navbar>
            <div className="" >{children}</div>
            <div className="footer bg-dark text-white">
                <div className="container-fluid">
                    <div className="row text-left text-xs-center text-sm-left text-md-left mb-4">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="d-flex " style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", marginLeft: "4rem" }}>
                                <h5 className="mt-5 mb-4  " >Quick links</h5>
                                <div className="d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled quick-links d-flex " style={{ flexDirection: "column", fontSize: "15px" }}>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Home</a> </span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>About</a></span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>FAQ</a> </span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Get Started</a></span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="d-flex" style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", marginLeft: "4rem" }}>
                                <h5 className=" mt-5 mb-4  " >Community</h5>
                                <div className="align-items-center justify-content-center d-flex">
                                    <ul className="list-unstyled quick-links d-flex  " style={{ flexDirection: "column", fontSize: "15px" }}>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Our Services</a> </span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Expert Team</a></span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Sponsers</a> </span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Contact</a></span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="d-flex" style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", marginLeft: "4rem" }}>
                                <h5 className=" mt-5 mb-4 " >Recommended</h5>
                                <div className="d-flex align-content-center justify-content-center">
                                    <ul className="list-unstyled quick-links d-flex  " style={{ flexDirection: "column", fontSize: "15px" }}>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Chat</a> </span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Explore</a></span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>FAQ</a> </span></li>
                                        <li><span style={{ float: "left" }}><MdOutlineKeyboardDoubleArrowRight /><a href="#" style={{ textDecoration: "none", color: "white" }}>Privacy policy</a></span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ color: "white" }}></hr>
                    <div className="col-12 ">
                        <CiFacebook style={{ height: "30px", width: "30px", margin: "0px 1rem", cursor: "pointer" }} />
                        <FiTwitter style={{ height: "25px", width: "25px", margin: "0px 1rem", cursor: "pointer" }} />
                        <SiInstagram style={{ height: "25px", width: "25px", margin: "0px 1rem", cursor: "pointer" }} />
                        <SiGmail style={{ height: "25px", width: "25px", margin: "0px 1rem", cursor: "pointer" }} />
                        <FaGooglePlusG style={{ height: "30px", width: "30px", margin: "0px 1rem", cursor: "pointer" }} />
                    </div>
                    <div className="col-12 row mt-3">
                        <p>2023 <FaCopyright /> All rights Reserved. We Talk</p>
                    </div>
                </div>

            </div>
        </>

    )
}
export default Layout;