
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import Category from './Sections/Category'
import You from './Sections/You'
import Table from './Sections/Table'
import Style from './Sections/Style'
import Footer from './Sections/Footer'
import Arrival from './Sections/Arrival'
import Faq from './Components/Faq'
import Slider from './Sections/Slider'
import AnimateSection from './Components/AnimateSection';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const App = () => {
  return (
    <>
      <Navbar />
      <AnimateSection animation="fade-up"><Hero /></AnimateSection>
      <AnimateSection animation="fade-right" delay="200"><Category /></AnimateSection>
      <AnimateSection animation="zoom-in" delay="400"><Slider /></AnimateSection>
      <AnimateSection animation="fade-left"><You /></AnimateSection>
      <AnimateSection animation="flip-up"><Table /></AnimateSection>
      <AnimateSection animation="fade-up" duration="1500"><Style /></AnimateSection>
      <AnimateSection animation="zoom-in-up"><Arrival /></AnimateSection>
      <AnimateSection animation="fade-right"><Faq /></AnimateSection>
      <Footer />
    </>
  )
}

export default App
