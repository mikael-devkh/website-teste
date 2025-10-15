import { Navbar } from "@/components/navbar"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export const metadata = {
  title: "Perguntas Frequentes - WT Serviços de Tecnologia",
  description:
    "Tire suas dúvidas sobre nossos serviços de Service Desk, Field Service e Infraestrutura de TI.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
