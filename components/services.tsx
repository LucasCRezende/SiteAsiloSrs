import {
  Home,
  Stethoscope,
  UtensilsCrossed,
  Activity,
  Gamepad2,
  Brain,
  HeartPulse,
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Acolhimento Permanente",
    description:
      "Ambiente seguro e acolhedor para moradia de longa permanencia, com suporte 24 horas.",
  },
  {
    icon: Stethoscope,
    title: "Enfermagem 24h",
    description:
      "Equipe de enfermagem presente dia e noite, garantindo cuidados continuos e atenciosos.",
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentacao Balanceada",
    description:
      "Refeicoes nutritivas e saborosas, elaboradas por nutricionistas para cada necessidade.",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description:
      "Sessoes de fisioterapia para manutencao da mobilidade, forca e independencia funcional.",
  },
  {
    icon: Gamepad2,
    title: "Atividades Recreativas",
    description:
      "Programacao diaria com jogos, musica, artesanato e atividades de socializacao.",
  },
  {
    icon: Brain,
    title: "Atendimento Psicologico",
    description:
      "Apoio emocional especializado para residentes e suas familias, com escuta ativa e acolhimento.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento Medico",
    description:
      "Consultas regulares e monitoramento de saude com medicos geriatras e especialistas.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Nossos Servicos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Cuidado completo para cada necessidade
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Oferecemos uma gama completa de servicos para garantir o bem-estar
            fisico, emocional e social dos nossos residentes.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
