import { notFound } from "next/navigation"
import { Calendar, ArrowLeft, User, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const baseUrl = "https://wtservicos.com.br"
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${baseUrl}${post.image}`],
    author: {
      "@type": "Organization",
      name: post.author,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "WT Serviços de Tecnologia",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/wt-logo-oficial.png`,
      },
    },
  }

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 border-b pt-32 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o Blog
              </Link>

              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-md mb-4">
                <span className="text-xs font-semibold uppercase tracking-wide">{post.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time>{post.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min de leitura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                {/* Main Content */}
                <div>
                  <div
                    className="prose prose-lg max-w-none
                      prose-headings:font-bold prose-headings:text-gray-900
                      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-blue-600
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-blue-600
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
                      prose-ul:my-4 prose-ul:space-y-2
                      prose-ol:my-4 prose-ol:space-y-2
                      prose-li:text-gray-700 prose-li:text-base
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* CTA */}
                  <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Gostou do conteúdo?</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Entre em contato conosco e descubra como a WT pode ajudar sua empresa a crescer com tecnologia de
                      ponta.
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <a
                        href="https://wa.me/5511951095026?text=Olá, vim pelo blog da WT e gostaria de saber mais dos serviços."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Fale com um Especialista
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:sticky lg:top-32 h-fit space-y-6">
                  {/* Author Card */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">Sobre o Autor</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-600">Especialista em TI</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Profissional com mais de 10 anos de experiência em soluções de tecnologia para empresas.
                    </p>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-bold text-gray-900 mb-3">Precisa de Ajuda?</h4>
                    <p className="text-sm text-gray-700 mb-4">Nossa equipe está pronta para atender sua empresa.</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a
                        href="https://wa.me/5511951095026?text=Olá, vim pelo blog da WT e gostaria de saber mais dos serviços."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>

                  {/* Share */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">Compartilhe</h4>
                    <p className="text-sm text-gray-600">Gostou deste artigo? Compartilhe com sua equipe!</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Artigos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {getAllBlogPosts()
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all border border-gray-200"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={false}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-white px-3 py-1 rounded-md text-xs font-semibold">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
