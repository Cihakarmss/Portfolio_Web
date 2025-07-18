import Benefit from "@/features/benefitSection/components/Benefit";
import Hero from "@/features/HeroSection/components/Hero";
import CreativeSkills from "@/features/SkilssSection/component/CreativeSkills";


export default function Home() {
  return (
    <div >
        {/* Hero Section */}
      <section className=" flex-col-reverse bg-peach-92 min-h-screen flex items-center justify-center py-[clamp(2rem,5vw,4rem)] px-4">
        <Hero />
      </section>
      {/* Creative Skills Section */}
      <section>
        <CreativeSkills />
      </section>
      {/* Benefit Section */}
      <Benefit />
      
    </div>
  );
}
