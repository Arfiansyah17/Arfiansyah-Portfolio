import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Project";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
