import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/wt-logo-oficial.png"
                alt="WT Serviços de Tecnologia"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
            <p className="text-foreground/70 mb-4 max-w-md">
              Especialistas em Field Service e Outsourcing de TI, oferecendo soluções completas para sua infraestrutura
              tecnológica com agilidade e excelência.
            </p>
            <div className="space-y-2 text-foreground/70">
              <p className="leading-relaxed">
                Rua Palermo, 16 - São Judas, São Paulo - SP, 04303-250
              </p>
              <a
                href="https://wa.me/5511951095026?text=Olá, vim pela página da WT-Serviços em Tecnologia e gostaria de saber mais dos serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Atendimento via WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#solucoes" className="text-foreground/70 hover:text-primary transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-foreground/70 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-foreground/70 hover:text-primary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-foreground/70 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Service Desk",
                "Field Service",
                "Infraestrutura",
                "Desmobilizações de Loja",
              ].map((service) => (
                <li key={service}>
                  <Link href="/#solucoes" className="text-foreground/70 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © {currentYear} WT Serviços de Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/politica-de-privacidade" className="text-foreground/60 hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-responsabilidade" className="text-foreground/60 hover:text-primary transition-colors">
              Termos de Responsabilidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
