import Image from "next/image"
import { Heart, Eye, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Missao",
    description:
      "Proporcionar cuidado integral, acolhimento e qualidade de vida aos idosos, promovendo dignidade e bem-estar em todas as fases da vida.",
  },
  {
    icon: Eye,
    title: "Visao",
    description:
      "Ser referencia em cuidado humanizado ao idoso, reconhecida pela excelencia dos servicos e pelo impacto positivo na vida dos residentes e suas familias.",
  },
  {
    icon: Shield,
    title: "Valores",
    description:
      "Respeito, empatia, transparencia, etica e compromisso com a dignidade humana. Acreditamos que cada idoso merece viver com amor e cuidado.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Idosos em atividades recreativas no Lar Acolher"
                width={600}
                height={450}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm opacity-90">Anos de historia</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Sobre Nos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Uma historia construida com amor e dedicacao
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Fundado ha mais de 25 anos, o Lar Acolher nasceu do sonho de criar
              um espaco onde os idosos pudessem viver com dignidade, conforto e
              alegria. Nossa instituicao oferece cuidado integral, com equipe
              multidisciplinar e infraestrutura pensada para o bem-estar de cada
              residente.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mais do que uma casa de repouso, somos uma familia. Aqui, cada
              idoso e tratado com respeito, carinho e atencao individualizada,
              garantindo que seus dias sejam preenchidos com atividades, convivio
              e muito amor.
            </p>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-xl mb-5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
