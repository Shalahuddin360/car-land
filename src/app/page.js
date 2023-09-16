import About from './components/About';
import BackTopButton from './components/BackTopButton';
import Cars from './components/Cars';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Why from './components/Why';

export default function Home() {
  return (
  <main className='max-w-[1920px] bg-white mx-auto'>
    <Header/>
    <Hero/>
    <Cars/>
    <About/>
    <Why/>
    <Testimonial/>
    <Cta/>
    <Footer/>
    <BackTopButton/>
    </main>
  )
}
