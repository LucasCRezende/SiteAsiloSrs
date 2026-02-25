import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Idosos sendo cuidados com carinho em ambiente acolhedor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-primary/20 text-primary-foreground border border-primary-foreground/20 rounded-full">
            Cuidado que transforma vidas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
            Cuidado, amor e dignidade na melhor idade
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 leading-relaxed max-w-xl">
            Uma instituicao dedicada a oferecer acolhimento, respeito e
            qualidade de vida aos idosos. Aqui, cada momento e vivido com
            carinho e atencao.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              <Link href="#doar">
                Quero Ajudar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8"
            >
              <Link href="#sobre">Conheca Nossa Historia</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">70+</p>
              <p className="text-sm text-primary-foreground/70">Anos de cuidado</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-primary-foreground">120+</p>
              <p className="text-sm text-primary-foreground/70">Idosos acolhidos</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="text-3xl font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/70">Profissionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
