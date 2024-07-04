
import Head from "next/head";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import DynamicGrid from "@/app/ui/dynamic-grid";
import IndexHeroSection from "@/app/ui/index-hero-section";
import IndexExpertiseSection from "@/app/ui/index-expertise-section";
import ProjectsSection from "@/app/ui/projects-section";
import CtaSection from "@/app/ui/cta-section";
import IndexTimelineSection from "@/app/ui/index-timeline";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Head>
        <title>Marcus Gugacs - Software Developer</title>
        <meta name="description" content="Portfolio of Marcus Gugacs, a software developer specializing in computer graphics and full-stack development." />
        <link href="/public/favicon.png" />
      </Head>

      <Navbar />

      <main className="flex-grow relative pt-16">
        <DynamicGrid cellSize={50} lineColor="rgba(255,255,255,0.1)" />

        <div className="relative z-10 container mx-auto px-4">
          <IndexHeroSection/>
          <IndexExpertiseSection/>
          <IndexTimelineSection />
          <ProjectsSection/>
          <CtaSection/>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
