import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { AboutSection } from "@/components/about-section"
import { NationalCoverageSection } from "@/components/national-coverage-section"
import { ProcessSection } from "@/components/process-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/ChatbotWidget"

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
  {
    ssr: false,
    loading: () => <div className="py-24 text-center text-gray-500">Carregando depoimentos...</div>,
  },
)

const QuoteFormSection = dynamic(
  () => import("@/components/quote-form-section").then((mod) => mod.QuoteFormSection),
  {
    ssr: false,
    loading: () => <div className="py-24 text-center text-gray-500">Carregando formulário de orçamento...</div>,
  },
)

const BlogSection = dynamic(
  () => import("@/components/blog-section").then((mod) => mod.BlogSection),
  {
    ssr: false,
    loading: () => <div className="py-24 text-center text-gray-500">Carregando artigos do blog...</div>,
  },
)

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

      <div className="bg-white">
        <TestimonialsSection />
      </div>

      <QuoteFormSection />

      <div className="bg-gray-50">
        <BlogSection />
      </div>

      <Footer />

      <WhatsAppWidget />
      <ChatbotWidget />
    </main>
  )
}
