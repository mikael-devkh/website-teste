import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { FAQSection, faqData } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { faqData } from "@/lib/faq-data"

export const metadata = {
  title: "Perguntas Frequentes - WT Serviços de Tecnologia",
  description:
    "Tire suas dúvidas sobre nossos serviços de Service Desk, Field Service, Infraestrutura de TI e desmobilizações de loja.",
}

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
