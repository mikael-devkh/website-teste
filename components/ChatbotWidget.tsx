"use client"

import { useMemo, useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const questions = [
  {
    id: "service",
    question: "Qual serviço você procura?",
    placeholder: "Ex: Field Service ou Service Desk",
  },
  {
    id: "companySize",
    question: "Qual o tamanho da sua empresa?",
    placeholder: "Ex: 150 colaboradores",
  },
  {
    id: "timeline",
    question: "Quando deseja iniciar o projeto?",
    placeholder: "Ex: Próximas 2 semanas",
  },
] as const

type QuestionId = (typeof questions)[number]["id"]

type Responses = Record<QuestionId, string>

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [responses, setResponses] = useState<Partial<Responses>>({})

  const isComplete = currentStep >= questions.length

  const whatsappLink = useMemo(() => {
    if (!isComplete) return null

    const messageLines = [
      "Olá! Gostaria de conversar com a WT Serviços.",
      `Serviço de interesse: ${responses.service || "-"}`,
      `Tamanho da empresa: ${responses.companySize || "-"}`,
      `Prazo desejado: ${responses.timeline || "-"}`,
    ]

    const message = messageLines.join("\n")
    return `https://wa.me/5511951095026?text=${encodeURIComponent(message)}`
  }, [isComplete, responses])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!currentAnswer.trim()) return

    const question = questions[currentStep]
    setResponses((prev) => ({ ...prev, [question.id]: currentAnswer.trim() }))
    setCurrentAnswer("")
    setCurrentStep((prev) => prev + 1)
  }

  const handleRestart = () => {
    setResponses({})
    setCurrentAnswer("")
    setCurrentStep(0)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          type="button"
          size="lg"
          className="rounded-full shadow-xl bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Precisa de ajuda?
        </Button>
      ) : (
        <div className="w-80 sm:w-96 rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900 flex flex-col overflow-hidden">
          <div className="flex items-start justify-between gap-4 bg-primary text-primary-foreground px-5 py-4">
            <div>
              <p className="font-semibold">Assistente WT</p>
              <p className="text-sm text-primary-foreground/80">Vamos entender a sua necessidade em poucos passos.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-primary-foreground/20"
              aria-label="Fechar chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4 text-sm text-gray-700 dark:text-gray-100">
            {questions.slice(0, currentStep).map((question) => (
              <div key={question.id} className="space-y-2">
                <div className="inline-flex max-w-[85%] rounded-2xl bg-gray-100 px-4 py-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                  {question.question}
                </div>
                <div className="ml-auto inline-flex max-w-[85%] rounded-2xl bg-primary/10 px-4 py-2 text-primary">
                  {responses[question.id]}
                </div>
              </div>
            ))}

            {!isComplete && (
              <div className="inline-flex max-w-[90%] flex-col rounded-2xl bg-gray-100 px-4 py-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                <span className="font-medium">{questions[currentStep].question}</span>
                <span className="text-xs text-gray-500 dark:text-gray-300">
                  {questions[currentStep].placeholder}
                </span>
              </div>
            )}

            {isComplete && (
              <div className="space-y-3 rounded-xl bg-gray-100 px-4 py-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                <p className="font-semibold">Obrigado! Confira o resumo:</p>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Serviço:</strong> {responses.service}
                  </li>
                  <li>
                    <strong>Tamanho da empresa:</strong> {responses.companySize}
                  </li>
                  <li>
                    <strong>Prazo desejado:</strong> {responses.timeline}
                  </li>
                </ul>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  Clique no botão abaixo para continuar o atendimento via WhatsApp.
                </p>
              </div>
            )}
          </div>

          {!isComplete ? (
            <form onSubmit={handleSubmit} className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <Input
                  id={`chatbot-${questions[currentStep].id}`}
                  value={currentAnswer}
                  onChange={(event) => setCurrentAnswer(event.target.value)}
                  placeholder={questions[currentStep].placeholder}
                  autoFocus
                />
                <Button type="submit" size="icon" className="shrink-0 bg-primary hover:bg-primary/90" aria-label="Enviar resposta">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-2 border-t border-gray-200 px-4 py-4 dark:border-gray-800">
              {whatsappLink && (
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Continuar no WhatsApp
                  </a>
                </Button>
              )}
              <Button variant="outline" className="w-full" onClick={handleRestart}>
                Reiniciar conversa
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
