import Test from "./Test";
import "./app.scss";
import HeroSection from "./components/herosection/Hero";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return <div>
    <section>
      <Navbar />
      <HeroSection/>
    </section>
    <section><a href="">Hello</a></section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Paralax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
    {/* <Test></Test> */}
  </div>
};

export default App;
