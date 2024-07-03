import Head from "next/head";
import Navbar from "@/app/ui/navbar";
import AboutHeroSection from "@/app/ui/about-hero-section";
import SkillsSection from "@/app/ui/skill-section";
import TimelineSection from "@/app/ui/timeline-section";
import AboutExpertiseSection from "@/app/ui/about-expertise";
import Footer from "@/app/ui/footer";
import DynamicGrid from "@/app/ui/dynamic-grid";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>About - Your Name</title>
        <meta name="description"
              content="Learn more about [Your Name], a software developer specializing in computer graphics and full-stack development."/>
      </Head>

      <Navbar/>

      <main className="relative pt-16">
        <DynamicGrid cellSize={50} lineColor="rgba(255,255,255,0.1)" />

        <div className="relative z-10">
          <AboutHeroSection/>
          <AboutExpertiseSection/>
          <SkillsSection/>
          <TimelineSection/>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
