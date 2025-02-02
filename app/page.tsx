import Faq from "./components/landing-page/Faq";
import Header from "./components/landing-page/Header";
import Hero from "./components/landing-page/Hero";
import Pricing from "./components/landing-page/Pricing";
import VideoExplanation from "./components/landing-page/Video-explanation";

export default function Home() {
  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing/>
      <Faq/>
      {/*  
    
      <Footer/> */}
    </div>
  );
}
