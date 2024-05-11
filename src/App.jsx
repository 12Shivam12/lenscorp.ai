import FAQ from "./FAQ";
import TrueAI from "./TrueAI";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import OurBlogs from "./components/OurBlogs";
import OurClient from "./components/OurClient";
import OurNumbers from "./components/OurNumbers";
import OurVision from "./components/OurVision";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Aboutus/>
    <Services/>
    <TrueAI/>
    <WhyChooseUs/>
    <FAQ/>
    <OurVision/>
    <OurBlogs/>
    <OurClient/>
    <OurNumbers/>
    <Contact/>
    <Footer/>
    </>
  )
}