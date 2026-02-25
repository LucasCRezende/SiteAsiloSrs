import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, HandCoins, Apple, ArrowRight } from "lucide-react"

const donationOptions = [
  {
    icon: HandCoins,
    title: "Pix",
    description: "Faça uma doação rapida e segura via Pix para nossa chave institucional.",
  },
  {
    icon: Heart,
    title: "Mensal Recorrente",
    description: "Contribua mensalmente e ajude a manter nosso trabalho de forma contínua.",
  },
  {
    icon: Apple,
    title: "Doações de Itens",
    description: "Doe alimentos, roupas, materiais de higiene e outros itens essenciais.",
  },
]

export function Donation() {
  return (
    <section id="doar" className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-wider uppercase text-primary-foreground/70">
              Faca a Diferença
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight text-balance">
              Sua ajuda transforma vidas
            </h2>
            <p className="mt-6 text-primary-foreground/85 text-lg leading-relaxed">
              Cada contribuição, por menor que seja, faz uma diferenca enorme na
              vida dos nossos idosos. Sua generosidade ajuda a manter os
              cuidados, a alimentacao, os medicamentos e as atividades que
              trazem alegria e dignidade.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
              >
                <Link href="#contato">
                  Doar Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8"
              >
                <Link href="#contato">
                  <Users className="mr-2 h-4 w-4" />
                  Ser Voluntario
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {donationOptions.map((option) => (
              <div
                key={option.title}
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-6 flex items-start gap-4 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-xl shrink-0">
                  <option.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-1">
                    {option.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
