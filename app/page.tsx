import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Team from '@/components/Team';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Team />
      </main>
      <footer className="py-8 px-6 border-t border-cyan-500/20">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2024 AIM Lab - Artificial Intelligence in Mobility. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
