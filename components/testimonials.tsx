"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Helena",
    role: "Familiar",
    text: "Minha mae esta no Lar Acolher ha 3 anos e posso dizer que foi a melhor decisao que tomamos. A equipe trata ela com muito carinho e respeito. Fico tranquila sabendo que ela esta bem cuidada.",
  },
  {
    name: "Seu Joao",
    role: "Residente",
    text: "Aqui eu encontrei uma nova familia. As atividades do dia a dia me mantem ativo e feliz. Os cuidadores sao maravilhosos e sempre estao dispostos a ajudar com um sorriso no rosto.",
  },
  {
    name: "Ana Paula",
    role: "Voluntaria",
    text: "Ser voluntaria no Lar Acolher mudou minha vida. Ver o sorriso dos idosos quando chegamos e algo que nao tem preco. A instituicao faz um trabalho incrivel e merece todo apoio.",
  },
  {
    name: "Carlos Eduardo",
    role: "Familiar",
    text: "A transparencia e o profissionalismo da equipe nos deram a confianca que precisavamos. Meu pai recebe cuidados excepcionais e participamos ativamente do dia a dia dele.",
  },
  {
    name: "Dona Francisca",
    role: "Residente",
    text: "Nunca pensei que seria tao feliz morando aqui. Fiz amizades, aprendi coisas novas e me sinto acolhida todos os dias. E como ter uma familia grande e carinhosa.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            O que dizem sobre nos
          </h2>
        </div>

        <div className="mt-14 relative max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 min-h-[280px] flex flex-col items-center justify-center text-center">
            <Quote className="h-10 w-10 text-primary/20 mb-6" />
            <p className="text-lg sm:text-xl text-foreground leading-relaxed italic">
              {`"${testimonials[current].text}"`}
            </p>
            <div className="mt-8">
              <p className="font-bold text-foreground text-lg">{testimonials[current].name}</p>
              <p className="text-sm text-primary font-medium">{testimonials[current].role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Proximo depoimento"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
