import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { AboutSection } from "@/components/about-section"
import { NationalCoverageSection } from "@/components/national-coverage-section"
import { ProcessSection } from "@/components/process-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/ChatbotWidget"
import { LazyHomeSections } from "@/components/lazy-home-sections"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      <div className="bg-white">
        <SolutionsSection />
      </div>

      <div className="bg-gray-50">
        <AboutSection />
      </div>

      <div className="bg-white">
        <NationalCoverageSection />
      </div>

      <div className="bg-gray-50">
        <ProcessSection />
      </div>

      <LazyHomeSections />

      <Footer />

      <WhatsAppWidget />
      <ChatbotWidget />
    </main>
  )
}
