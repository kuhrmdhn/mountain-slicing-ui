import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Content from "./components/Content";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-[100svh] bg-main h-max *:selection:text-accent">
      <Header />
      <HeroSection />
      <Content />
      <Footer />
    </main>
  );
}
