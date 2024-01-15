import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        {/* <Sidebar /> */}
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}>D. A. O.</motion.span>
            <div className="social">
                <a href=""><img src="/facebook.png" alt="social icon" /></a>
                <a href=""><img src="/instagram.png" alt="social icon" /></a>
                <a href=""><img src="/youtube.png" alt="social icon" /></a>
                <a href=""><img src="/dribble.png" alt="social icon" /></a>
            </div>
        </div>
    </div>
  )
}