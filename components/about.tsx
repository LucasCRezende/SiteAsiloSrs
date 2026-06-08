import Image from "next/image"
import { Heart, Eye, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Missão",
    description:
      "Oferecer acolhimento integral à pessoa idosa, garantindo assistência humanizada, ambiente seguro e suporte físico, emocional e social, honrando nossa história de solidariedade e serviço à comunidade.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em cuidado humanizado ao idoso, reconhecida pela excelência dos serviços e pelo impacto positivo na vida dos residentes e suas famílias.",
  },
  {
    icon: Shield,
    title: "Valores",
    description:
      "Respeito, empatia, transparência, ética e compromisso com a dignidade humana. Acreditamos que cada idoso merece viver com amor e cuidado.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* IMAGEM */}
          <div className="relative h-full">
            <div className="relative overflow-hidden rounded-2xl h-full">
              <Image
                src="/images/about.jpg"
                alt="Idosos em atividades recreativas"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Selo 70+ */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">70+</p>
              <p className="text-sm opacity-90">Anos de história</p>
            </div>
          </div>

          {/* TEXTO */}
          <div className="relative">
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Sobre Nós
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Uma história construída com amor e dedicação
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              A Sociedade de Assistência aos Pobres, hoje reconhecida como uma das
              instituições mais importantes de acolhimento em Santa Rita do Sapucaí,
              nasceu de um gesto simples de solidariedade.
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              No início, o local era apenas uma rua com pequenas casas destinadas
              a abrigar pessoas em situação de vulnerabilidade. A iniciativa,
              promovida por maçons e espíritas, recebeu o nome de Liga Filantrópica.
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Em 1944, sob a presidência do Cel. Francisco Moreira da Costa,
              foram construídos dois pavilhões, além de refeitório e capela,
              fortalecendo a estrutura da instituição.
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Ao longo das décadas, reformas, ampliações e o apoio da comunidade
              garantiram mais conforto, dignidade e qualidade de vida aos idosos.
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Hoje, seguimos honrando essa trajetória de solidariedade e amor ao próximo.
            </p>

            {/* SELO + HISTÓRIA (igual estilo 70+) */}
            <div className="absolute -bottom-6 right-0 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <a
                href="https://emporiodenoticias.blogspot.com/2012/06/como-surgiu-sociedade-de-assistencia.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-2xl font-bold">+ História</p>
                <p className="text-sm opacity-90">Ver matéria completa</p>
              </a>
            </div>

          </div>
        </div>

        {/* MISSÃO VISÃO VALORES */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-xl mb-5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}