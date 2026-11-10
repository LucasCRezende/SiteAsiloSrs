import Image from "next/image"
import { KeyRound, Ticket, Trophy } from "lucide-react"

export function Ganhadora() {
  return (
    <section id="ganhadora" className="py-20 lg:py-28 bg-secondary scroll-mt-16 lg:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Image
            src="/images/ganhadora-rifa.jpg"
            alt="Ganhadora da Rifa Solidária segurando a chave da Chevrolet Montana branca"
            width={1600}
            height={1204}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-auto rounded-3xl border border-border shadow-lg"
          />

          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-primary">
              <Trophy className="h-4 w-4" />
              Resultado da Rifa Solidária
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Sabrina (Pilates) ganhou a Chevrolet Montana!
            </h2>

            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Parabéns, Sabrina Aparecida dos Santos! E muito obrigado a todos que compraram sua cota e
              participaram do Leilão Beneficente. Cada gesto ajuda o Asilo a continuar
              cuidando de quem mais precisa.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 font-semibold text-foreground">
              <Ticket className="h-5 w-5 text-primary" />
              Número sorteado: 2677
            </p>
          </div>
        </div>

        <figure className="mt-12 lg:mt-16 mx-auto max-w-4xl">
          <Image
            src="/images/entrega-montana.webp"
            alt="Entrega da Chevrolet Montana à ganhadora Sabrina Aparecida dos Santos, em frente ao Asilo, ao lado de representantes da instituição"
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 896px, 100vw"
            className="w-full h-auto rounded-3xl border border-border shadow-lg"
          />
          <figcaption className="mt-4 flex items-center justify-center gap-2 text-center text-muted-foreground">
            <KeyRound className="h-4 w-4 text-primary shrink-0" />
            Entrega da Montana para a ganhadora da rifa, Sabrina Aparecida dos Santos
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
