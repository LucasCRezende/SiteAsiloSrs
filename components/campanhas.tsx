"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  CalendarDays,
  Clock,
  MapPin,
  Copy,
  Check,
  MessageCircle,
  Gavel,
  Car,
  Ticket,
} from "lucide-react"

// Data do sorteio da rifa e do leilão (horário de Brasília)
const DATA_EVENTO = new Date("2026-11-07T15:00:00-03:00")

const CHAVE_PIX = "festeirosasilosrs@gmail.com"

const WHATSAPP_RIFA = `https://wa.me/5535997660141?text=${encodeURIComponent(
  "Olá! Quero comprar cotas da Rifa Solidária da Montana. Vou enviar o comprovante do Pix."
)}`

const MAPA_LEILAO =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Parque de Exposição Cooperita, Santa Rita do Sapucaí - MG")

function useContagem(alvo: Date) {
  const [agora, setAgora] = useState<number | null>(null)

  useEffect(() => {
    setAgora(Date.now())
    const timer = setInterval(() => setAgora(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (agora === null) return null

  const diff = Math.max(0, alvo.getTime() - agora)
  return {
    encerrado: diff === 0,
    dias: Math.floor(diff / 86_400_000),
    horas: Math.floor((diff / 3_600_000) % 24),
    minutos: Math.floor((diff / 60_000) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

function Contagem() {
  const tempo = useContagem(DATA_EVENTO)

  if (tempo?.encerrado) {
    return (
      <p className="mt-8 text-lg font-semibold text-primary">
        Obrigado a todos que participaram! Em breve divulgaremos o resultado.
      </p>
    )
  }

  const blocos = [
    { valor: tempo?.dias, label: "dias" },
    { valor: tempo?.horas, label: "horas" },
    { valor: tempo?.minutos, label: "min" },
    { valor: tempo?.segundos, label: "seg" },
  ]

  return (
    <div className="mt-8 flex justify-center gap-3 sm:gap-4" aria-label="Contagem regressiva para 07 de novembro">
      {blocos.map((b) => (
        <div
          key={b.label}
          className="w-16 sm:w-20 bg-card border border-border rounded-xl py-3 shadow-sm"
        >
          <p className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">
            {b.valor === undefined ? "--" : String(b.valor).padStart(2, "0")}
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{b.label}</p>
        </div>
      ))}
    </div>
  )
}

function Video({ src, poster, titulo }: { src: string; poster: string; titulo: string }) {
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        className="w-full aspect-[9/16] rounded-2xl bg-black object-cover shadow-lg"
        aria-label={titulo}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

function Detalhe({ icon: Icon, children }: { icon: typeof Clock; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex items-center justify-center w-9 h-9 bg-primary/10 rounded-lg shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <span className="text-foreground leading-relaxed pt-1.5">{children}</span>
    </li>
  )
}

function CopiarPix() {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    try {
      await navigator.clipboard.writeText(CHAVE_PIX)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2500)
    } catch {
      window.prompt("Copie a chave Pix:", CHAVE_PIX)
    }
  }

  return (
    <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Chave Pix (e-mail)
      </p>
      <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
        <span className="font-semibold text-foreground break-all">{CHAVE_PIX}</span>
        <Button size="sm" variant="outline" onClick={copiar}>
          {copiado ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
          {copiado ? "Copiado!" : "Copiar"}
        </Button>
      </div>
    </div>
  )
}

export function Campanhas() {
  return (
    <section id="campanhas" className="py-20 lg:py-28 bg-secondary scroll-mt-16 lg:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Campanhas Solidárias
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            07 de novembro é dia de ajudar o Asilo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Rifa da Chevrolet Montana e Leilão Beneficente de gado: toda a renda é
            revertida para o cuidado dos nossos idosos.
          </p>
          <Contagem />
        </div>

        {/* RIFA */}
        <article className="mt-16 bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Car className="h-4 w-4" /> Rifa Solidária
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
                Concorra a uma Chevrolet Montana LS 1.4 Flex 2014
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Cada número custa apenas <strong className="text-foreground">R$ 20,00</strong>.
                Ao comprar sua cota, você ajuda o Asilo a continuar cuidando de quem mais precisa.
              </p>

              <ul className="mt-6 space-y-3">
                <Detalhe icon={Ticket}>R$ 20,00 por número</Detalhe>
                <Detalhe icon={CalendarDays}>Sorteio em 07 de novembro de 2026</Detalhe>
              </ul>

              <div className="mt-6">
                <p className="font-semibold text-foreground mb-3">Como participar</p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Faça o Pix de R$ 20,00 por número para a chave abaixo;</li>
                  <li>Envie o comprovante pelo WhatsApp;</li>
                  <li>Receba seus números da sorte. Boa sorte!</li>
                </ol>
              </div>

              <div className="mt-6 space-y-4">
                <CopiarPix />
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
                  <a href={WHATSAPP_RIFA} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" fill="currentColor" />
                    Enviar comprovante pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <a href="/images/eventos/rifa.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/eventos/rifa.jpg"
                  alt="Cartaz da Rifa Solidária: sorteio de uma Chevrolet Montana LS 1.4 Flex 2014, cota de R$ 20,00, sorteio em 07 de novembro"
                  width={643}
                  height={912}
                  className="w-full h-auto rounded-2xl border border-border shadow-md hover:shadow-xl transition-shadow"
                />
              </a>
            </div>

            <div className="lg:col-span-3">
              <Video src="/videos/rifa.mp4" poster="/videos/rifa-capa.jpg" titulo="Vídeo da Rifa Solidária" />
            </div>
          </div>
        </article>

        {/* LEILÃO */}
        <article className="mt-10 bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Gavel className="h-4 w-4" /> Leilão Beneficente
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
                Leilão Beneficente do Asilo
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Participe do nosso leilão de gado e venha passar uma tarde com a gente.
                Toda a arrecadação é revertida para o Asilo.
              </p>

              <ul className="mt-6 space-y-3">
                <Detalhe icon={CalendarDays}>Sábado, 07 de novembro de 2026</Detalhe>
                <Detalhe icon={Clock}>A partir das 15:00</Detalhe>
                <Detalhe icon={MapPin}>
                  Parque de Exposição Cooperita
                  <br />
                  <span className="text-muted-foreground">Santa Rita do Sapucaí - MG</span>
                </Detalhe>
              </ul>

              <Button asChild size="lg" variant="outline" className="mt-8 w-full">
                <a href={MAPA_LEILAO} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Como chegar
                </a>
              </Button>
            </div>

            <div className="lg:col-span-4">
              <a href="/images/eventos/leilao.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/eventos/leilao.jpg"
                  alt="Cartaz do Leilão Beneficente do Asilo: 07 de novembro, 15:00, Parque de Exposição Cooperita, Santa Rita do Sapucaí - MG"
                  width={1254}
                  height={1254}
                  className="w-full h-auto rounded-2xl border border-border shadow-md hover:shadow-xl transition-shadow"
                />
              </a>
            </div>

            <div className="lg:col-span-3">
              <Video src="/videos/leilao.mp4" poster="/videos/leilao-capa.jpg" titulo="Vídeo convite do Leilão Beneficente" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
