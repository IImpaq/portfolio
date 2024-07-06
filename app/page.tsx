import Head from "next/head";
import Navbar from "@/app/ui/common/navbar";
import Footer from "@/app/ui/common/footer";
import DynamicGrid from "@/app/ui/common/dynamic-grid";
import HeroSection from "@/app/ui/hero-section";
import ExpertiseSection from "@/app/ui/common/expertise-section";
import CtaSection from "@/app/ui/cta-section";
import TimelineSection from "@/app/ui/timeline-section";
import WorkSection from "@/app/ui/work-section";
import {fetchPublicContentURL} from "@/app/lib/data";
import {createClient} from "@/app/lib/supabase/server";

const Home = async () => {
  const supabase = createClient();
  const portraitUrl = await fetchPublicContentURL(supabase, "static/portrait.jpg")

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
          <HeroSection portraitUrl={portraitUrl}/>
          <ExpertiseSection/>
          <WorkSection/>
          <TimelineSection/>
          <CtaSection/>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
