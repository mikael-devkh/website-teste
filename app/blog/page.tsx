import { Calendar, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-posts"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32 pt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Blog & Insights</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Blog da <span className="text-primary">WT</span>
              </h1>
              <p className="text-xl text-gray-300">
                Fique por dentro das últimas novidades, tendências e cases de sucesso do mercado de TI
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={false}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <time>{post.date}</time>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                    >
                      Leia Mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
                <h3 className="text-3xl font-bold mb-4">Quer saber mais sobre nossas soluções?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a crescer
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a
                    href="https://wa.me/5511951095026?text=Olá, vim pelo blog da WT e gostaria de saber mais dos serviços."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fale com um Especialista
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
