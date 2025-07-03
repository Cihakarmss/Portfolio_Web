import Hero from "@/features/HeroSection/components/Hero";
import CreativeSkills from "@/features/SkilssSection/component/CreativeSkills";


export default function Home() {
  return (
    <div >
        {/* Hero Section */}
      <section className="bg-peach-92 min-h-screen flex items-center justify-center py-12 px-4">
        <Hero />
      </section>
      {/* Creative Skills Section */}
      <section>
        <CreativeSkills />
      </section>
      
    </div>
  );
}
