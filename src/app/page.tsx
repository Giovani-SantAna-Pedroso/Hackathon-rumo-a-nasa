import { Lato } from 'next/font/google';
import Hero from './components/Hero';
// import Problema from "./components/Problema";
// import Cleide2 from "./components/Cleide2";
import Plan from './components/Plan';
import Features from './components/Features';
import Reviews from './components/Review';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
// import SectionWImage from "@/components/UI/SectionWImage";
import Presentation from './components/Presentation';
import Section from '@/components/UI/Section';
import OMV from './components/OMV';
const lato = Lato({ subsets: ['latin'], weight: '400' });
export default function Home() {
  return (
    <div className={`${lato.className}`}>
      <Hero />
      {/* <Video /> */}
      {/* <Presentation /> */}
      <Plan />
      {/*   <Cleide2 /> */}
      <OMV />
      <Features />
      {/* <Reviews /> */}
      {/* </SectionWImage> */}
      <CTA />
      <FAQ />
      {/* <Contato /> */}
    </div>
  );
}
