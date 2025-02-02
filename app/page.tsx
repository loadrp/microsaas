import Header from "./components/landing-page/Header";
import Hero from "./components/landing-page/Hero";
import VideoExplanation from "./components/landing-page/Video-explanation";

export default function Home() {
  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation/>
     {/*  
      
      <Pricing/>
      <FAQ/>
      <Footer/> */}

    </div>
  );
}
