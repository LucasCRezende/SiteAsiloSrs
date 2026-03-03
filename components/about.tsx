import Image from "next/image"
import { Heart, Eye, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Missao",
    description:
      "Oferecer acolhimento integral à pessoa idosa, garantindo assistência humanizada, ambiente seguro e suporte físico, emocional e social, honrando nossa história de solidariedade e serviço à comunidade..",
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
          <div className="relative h-full">
            <div className="relative overflow-hidden rounded-2xl h-full">
              <Image
                src="/images/about.jpg"
                alt="Idosos em atividades recreativas no Lar Acolher"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">70+</p>
              <p className="text-sm opacity-90">Anos de historia</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Sobre Nos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Uma história construída com amor e dedicação
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              A Sociedade de Assistência aos Pobres, hoje reconhecida como uma das
              instituições mais importantes de acolhimento em Santa Rita do Sapucaí,
              nasceu de um gesto simples de solidariedade. No início, o local era 
              Apenas uma rua com pequenas casas destinadas a abrigar pessoas em situação
              de vulnerabilidade. A iniciativa, promovida por maçons e espíritas, 
              recebeu o nome de Liga Filantrópica, oferecendo abrigo aos mais necessitados.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Por volta de 1940, sensibilizado com as dificuldades enfrentadas pelos idosos, 
              o então presidente dos Vicentinos, Vítor de Souza Pinto, mobilizou a comunidade 
              para fortalecer a assistência. A união entre espíritas, maçons e católicos marcou
              uma nova fase da entidade, que passou a se estruturar oficialmente como Liga Filantrópica
              Santarritense, ampliando o cuidado e garantindo melhores condições aos assistidos.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Em 1944, sob a presidência do Cel. Francisco Moreira da Costa, foram construídos dois
              pavilhões, um masculino e outro feminino, além de refeitório, capela e residências. 
              A chegada das Irmãs da Providência trouxe organização interna e dedicação contínua ao cuidado dos idosos.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Entre as décadas de 1950 e 1970, importantes lideranças contribuíram para o crescimento
              da instituição. Reformas estruturais, ampliação das instalações e melhorias nas condições
              de moradia garantiram mais conforto e dignidade aos residentes. Em 1973, após grande reconstrução,
              o asilo foi reinaugurado totalmente renovado.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Em 1976, foi firmado convênio com o INPS, assegurando benefícios e fortalecendo a sustentabilidade 
              da entidade. Nos anos seguintes, novas construções foram realizadas, incluindo salão de recreação, 
              espaço para artesanato e melhorias na infraestrutura de saúde, como a criação da enfermaria e 
              aquisição de equipamentos essenciais.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Ao longo de sua trajetória, a instituição sempre contou com o apoio da comunidade, 
              lideranças dedicadas e religiosas comprometidas com o cuidado e o bem-estar dos idosos.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Hoje, seguimos honrando essa história de solidariedade, trabalho e amor ao próximo, 
              mantendo vivo o propósito que nos deu origem: oferecer acolhimento digno, respeito 
              e qualidade de vida às pessoas idosas.
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
