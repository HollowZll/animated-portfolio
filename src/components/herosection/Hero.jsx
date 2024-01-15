import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="wrapper">

      
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>DANIEL ANTIPOV</motion.h2>
        <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
        <motion.div className="buttons" variants={textVariants}>
          <motion.button variants={textVariants}>See The Latest Work</motion.button>
          <motion.button variants={textVariants}>Contact me</motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <div className="sliddingTextContainer">
        Writer Content Creator Influenser
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="profile-pic"/>
      </div>
    </div>
  )
}
export default HeroSection