import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Noto_Sans_Javanese, Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
})

export const notoSansJavanese = Noto_Sans_Javanese({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["javanese", "latin"]
})


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
