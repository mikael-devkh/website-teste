"use client"

import { MapPin, Users, Building2, Clock } from "lucide-react"

export function NationalCoverageSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cobertura <span className="text-primary">Nacional</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Técnicos especializados em todo o Brasil, prontos para atender sua empresa com agilidade e excelência
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16">
          {/* Left side - Globe visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] flex items-center justify-center">
                {/* Globe representation */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Globe circle */}
                  <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
                    <circle cx="200" cy="200" r="150" fill="currentColor" className="text-primary/5" />
                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/20"
                    />

                    {/* Latitude lines */}
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="150"
                      ry="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="150"
                      ry="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="150"
                      ry="120"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />

                    {/* Longitude lines */}
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="40"
                      ry="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="80"
                      ry="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="120"
                      ry="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />

                    {/* Center vertical line */}
                    <line
                      x1="200"
                      y1="50"
                      x2="200"
                      y2="350"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary/15"
                    />
                  </svg>

                  {/* Animated pins positioned across the globe */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-md">
                      {/* Pins distributed across the globe */}
                      <div className="absolute animate-pulse" style={{ top: "20%", left: "30%", animationDelay: "0s" }}>
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "25%", left: "50%", animationDelay: "0.3s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "30%", left: "65%", animationDelay: "0.6s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "40%", left: "25%", animationDelay: "0.9s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "45%", left: "45%", animationDelay: "1.2s" }}
                      >
                        <MapPin className="w-6 h-6 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "50%", left: "70%", animationDelay: "1.5s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "60%", left: "35%", animationDelay: "1.8s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "65%", left: "55%", animationDelay: "2.1s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "70%", left: "40%", animationDelay: "2.4s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                      <div
                        className="absolute animate-pulse"
                        style={{ top: "75%", left: "60%", animationDelay: "2.7s" }}
                      >
                        <MapPin className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 font-medium">Presença estratégica em todas as regiões do país</p>
              </div>
            </div>
          </div>

          {/* Right side - Statistics */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary mb-2">27 Estados</div>
                  <p className="text-gray-600">
                    Cobertura completa em todos os estados brasileiros, incluindo o Distrito Federal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary mb-2">500+ Cidades</div>
                  <p className="text-gray-600">
                    Atendimento em mais de 500 cidades, das capitais aos municípios do interior
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary mb-2">200+ Técnicos</div>
                  <p className="text-gray-600">Equipe especializada e certificada, pronta para atender sua empresa</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-gray-600">
                    Atendimento disponível 24 horas por dia, 7 dias por semana, em todo o território nacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Onde quer que sua empresa esteja, <span className="text-primary">estamos lá</span>
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa rede de técnicos especializados garante atendimento rápido e eficiente em qualquer região do Brasil
          </p>
          <a
            href="https://wa.me/5511951095026?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20da%20WT-Servi%C3%A7os%20em%20Tecnologia%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20cobertura%20nacional."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Consulte a Cobertura na Sua Região
          </a>
        </div>
      </div>
    </section>
  )
}
