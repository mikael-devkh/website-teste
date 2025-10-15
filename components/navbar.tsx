"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  const solutionsSubmenu = [
    { label: "Field Service", href: "/#solucoes" },
    { label: "Service Desk", href: "/#solucoes" },
    { label: "Infraestrutura", href: "/#solucoes" },
    { label: "Desmobilizações de Loja", href: "/#solucoes" },
  ]

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Orçamento", href: "/#orcamento" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/wt-logo-oficial.png"
              alt="WT Serviços de Tecnologia"
              width={200}
              height={60}
              className="transition-transform group-hover:scale-105 h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.slice(0, 1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="text-white/80 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Soluções
                <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                  {solutionsSubmenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-primary hover:bg-gray-700/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {menuItems.slice(1, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <a
                href="https://wa.me/5511951095026?text=Olá, vim pela página da WT-Serviços em Tecnologia e gostaria de saber mais dos serviços."
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba Mais
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-4">
              {menuItems.slice(0, 1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="text-white/80 hover:text-primary transition-colors font-medium py-2 flex items-center gap-1 w-full"
                >
                  Soluções
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </button>
                {isSolutionsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {solutionsSubmenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-white/70 hover:text-primary transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {menuItems.slice(1, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold w-full">
                <a
                  href="https://wa.me/5511951095026?text=Olá, vim pela página da WT-Serviços em Tecnologia e gostaria de saber mais dos serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba Mais
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
