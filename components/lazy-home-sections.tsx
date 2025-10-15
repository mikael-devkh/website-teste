"use client"

import dynamic from "next/dynamic"

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
  {
    loading: () => <div className="py-24 text-center text-gray-500">Carregando depoimentos...</div>,
  },
)

const QuoteFormSection = dynamic(
  () => import("@/components/quote-form-section").then((mod) => mod.QuoteFormSection),
  {
    loading: () => <div className="py-24 text-center text-gray-500">Carregando formulário de orçamento...</div>,
  },
)

const BlogSection = dynamic(
  () => import("@/components/blog-section").then((mod) => mod.BlogSection),
  {
    loading: () => <div className="py-24 text-center text-gray-500">Carregando artigos do blog...</div>,
  },
)

export function LazyHomeSections() {
  return (
    <>
      <div className="bg-white">
        <TestimonialsSection />
      </div>

      <QuoteFormSection />

      <div className="bg-gray-50">
        <BlogSection />
      </div>
    </>
  )
}
